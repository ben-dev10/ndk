import { promises as fs } from "fs";
import path from "path";

const REGISTRY_PATH = path.join(process.cwd(), "registry");
const OUTPUT_PATH = path.join(process.cwd(), "__registry__", "index.tsx");

interface RegistryFile {
  path: string;
  type: string;
  target?: string;
  content: string;
}

interface RegistryItem {
  name: string;
  description?: string;
  type: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files?: Array<{ path: string; type?: string; target?: string }>;
  meta?: {
    keywords?: string[];
    demoProps?: Record<string, unknown>;
  };
}

/**
 * Path replacement configuration
 * Add or modify path replacements here
 */
const PATH_REPLACEMENTS = [
  {
    from: "@_ndk/ui/components/",
    to: "@/components/",
    description: "NDK UI components package",
  },
  {
    from: "@_ndk/ui/",
    to: "@/",
    description: "NDK UI base package",
  },
  {
    from: "@_ndk/motion/",
    to: "@/motion/",
    description: "NDK Motion package",
  },
  {
    from: "@/registry/lib/",
    to: "@/lib/",
    description: "Registry lib paths",
  },
  {
    from: "@/registry/hooks/",
    to: "@/hooks/",
    description: "Registry hooks paths",
  },
  {
    from: "@/registry/components/",
    to: "@/components/",
    description: "Registry components paths",
  },
  {
    from: "@/registry/",
    to: "@/components/",
    description: "Default registry paths",
  },
] as const;

/**
 * Replace import/export paths based on configuration
 * Processes strings within quotes (single, double, or backticks)
 */
function replaceRegistryPaths(inputStr: string): string {
  return inputStr.replace(/(['"`])([\s\S]*?)\1/g, (match, quote, content) => {
    // Try each replacement rule in order
    for (const rule of PATH_REPLACEMENTS) {
      if (content.startsWith(rule.from)) {
        const rest = content.slice(rule.from.length);
        return `${quote}${rule.to}${rest}${quote}`;
      }
    }

    return match;
  });
}

/**
 * Recursively find all registry-item.json files in the registry directory
 */
async function findRegistryItems(dir: string): Promise<RegistryItem[]> {
  const items: RegistryItem[] = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Check if this directory contains a registry-item.json
        const registryItemPath = path.join(fullPath, "registry-item.json");

        try {
          await fs.access(registryItemPath);

          // Read and parse the registry item
          const content = await fs.readFile(registryItemPath, "utf-8");
          const item: RegistryItem = JSON.parse(content);

          // Remove $schema if it exists
          if ("$schema" in item) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (item as any).$schema;
          }

          items.push(item);
        } catch {
          // No registry-item.json in this directory, recurse into subdirectories
          const subItems = await findRegistryItems(fullPath);
          items.push(...subItems);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return items;
}

/**
 * Read file content and process it
 */
async function readFileContent(filePath: string): Promise<string> {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return replaceRegistryPaths(content).trim();
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return "";
  }
}

/**
 * Process registry items and read their file contents
 */
async function processRegistryItems(
  items: RegistryItem[],
): Promise<Map<string, Record<string, unknown>>> {
  const processedItems = new Map<string, Record<string, unknown>>();

  for (const item of items) {
    console.log(`Processing item: ${item.name}`);

    // Read file contents
    const filesWithContent: RegistryFile[] = [];

    if (item.files && item.files.length > 0) {
      for (const file of item.files) {
        const filePath = typeof file === "string" ? file : file.path;
        const resolvedPath = path.resolve(filePath);

        const content = await readFileContent(resolvedPath);

        filesWithContent.push({
          path: filePath,
          type:
            (typeof file === "object" ? file.type : undefined) || "registry:ui",
          target: typeof file === "object" ? file.target : undefined,
          content,
        });
      }
    }

    // Determine component path from first file
    const componentPath = filesWithContent[0]?.path
      ? `@/${filesWithContent[0].path}`
      : "";

    processedItems.set(item.name, {
      name: item.name,
      description: item.description || "",
      type: item.type || "registry:ui",
      dependencies: item.dependencies || [],
      devDependencies: item.devDependencies,
      registryDependencies: item.registryDependencies || [],
      files: filesWithContent,
      keywords: item.meta?.keywords || [],
      componentPath,
      demoProps: item.meta?.demoProps || {},
    });
  }

  return processedItems;
}

/**
 * Generate the index.tsx file content
 */
function generateIndexFile(
  processedItems: Map<string, Record<string, unknown>>,
): string {
  let output = `/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.mts
// Do not edit this file directly.
import * as React from "react"

export const index: Record<string, any> = {`;

  // Add index entry
  output += `
  "index": {
    name: "index",
    description: "",
    type: "registry:style",
    dependencies: [],
    devDependencies: undefined,
    registryDependencies: [],
    files: [],
    keywords: [],
    component: null,
    command: "@ndk-ui/index",
  },`;

  // Add all processed items
  for (const [name, item] of processedItems.entries()) {
    const componentImport = item.componentPath
      ? `(function() {
      const LazyComp = React.lazy(async () => {
        const mod = await import("${item.componentPath}");
        const exportName = Object.keys(mod).find(
          key => typeof mod[key] === 'function' || typeof mod[key] === 'object'
        ) || "${name}";
        const Comp = mod.default || mod[exportName];
        if (mod.animations) {
          (LazyComp as any).animations = mod.animations;
        }
        return { default: Comp };
      });
      LazyComp.demoProps = ${JSON.stringify(item.demoProps)};
      return LazyComp;
    })()`
      : "null";

    output += `
  "${name}": {
    name: ${JSON.stringify(name)},
    description: ${JSON.stringify(item.description)},
    type: "${item.type}",
    dependencies: ${JSON.stringify(item.dependencies)},
    devDependencies: ${JSON.stringify(item.devDependencies)},
    registryDependencies: ${JSON.stringify(item.registryDependencies)},
    files: ${JSON.stringify(item.files, null, 2)},
    keywords: ${JSON.stringify(item.keywords)},
    component: ${componentImport},
    command: "@ndk-ui/${name}",
  },`;
  }

  output += `
}`;

  return output;
}

/**
 * Main build function
 */
async function buildRegistryIndex() {
  try {
    console.log("🔍 Finding registry items...");

    // Find all registry-item.json files
    const registryItems = await findRegistryItems(REGISTRY_PATH);

    console.log(`✅ Found ${registryItems.length} registry items`);

    // Process items and read file contents
    console.log("📄 Processing registry items...");
    const processedItems = await processRegistryItems(registryItems);

    // Generate the index file content
    console.log("📝 Generating index file...");
    const indexContent = generateIndexFile(processedItems);

    // Ensure output directory exists
    const outputDir = path.dirname(OUTPUT_PATH);
    await fs.mkdir(outputDir, { recursive: true });

    // Remove old file if it exists
    try {
      await fs.access(OUTPUT_PATH);
      await fs.unlink(OUTPUT_PATH);
      console.log("🗑️  Removed old index file");
    } catch {
      // File doesn't exist, that's fine
    }

    // Write the new index file
    await fs.writeFile(OUTPUT_PATH, indexContent, "utf-8");

    console.log("✅ Successfully built __registry__/index.tsx");
    console.log(`📦 Processed ${processedItems.size} components`);
  } catch (error) {
    console.error("❌ Error building registry index:", error);
    throw error;
  }
}

// Execute the build
buildRegistryIndex().catch((error) => {
  console.error(error);
  process.exit(1);
});
