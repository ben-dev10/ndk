"use client";
import { index } from "@/__registry__";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@_ndk/ui/components/ui/tabs";
import { Loader } from "lucide-react";
import React, { Suspense, useMemo, useState } from "react";
import { DynamicCodeBlock } from "./dynamic-codeblock";
import ReactIcon from "@_ndk/ui/icons/react-icon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flattenFirstLevel<T>(input: Record<string, any>): T {
  return Object.values(input).reduce((acc, current) => {
    return { ...acc, ...current };
  }, {} as T);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unwrapValues(obj: Record<string, any>): Record<string, any> {
  if (obj !== null && typeof obj === "object" && !Array.isArray(obj)) {
    if ("value" in obj) {
      return obj.value;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: Record<string, any> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = unwrapValues(obj[key]);
      }
    }
    return result;
  }
  return obj;
}

// main component
export default function ComponentPreview({
  name,
  title,
}: {
  name: string;
  title?: string;
}) {
  const [componentProps, setComponentProps] = useState<Record<
    string,
    unknown
  > | null>(null);

  const code = useMemo(() => {
    const code = index[name]?.files?.[0]?.content;

    if (!code) {
      console.error(`Component with name "${name}" not found in registry.`);
      return null;
    }

    return code;
  }, [name]);

  const preview = useMemo(() => {
    const Component = index[name]?.component;

    if (Object.keys(Component?.demoProps ?? {}).length !== 0) {
      if (componentProps === null)
        setComponentProps(unwrapValues(Component?.demoProps));
    }

    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-muted-foreground text-sm">
          Component{" "}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component {...flattenFirstLevel(componentProps ?? {})} />;
  }, [name, componentProps]);

  return (
    <section className="_component-preview">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div
          className="flex items-center justify-between pb-2"
          id="component-preview-tab-list"
        >
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="preview"
          className="border-accent relative max-h-[350px] min-h-[350px] rounded-lg border-[6px]"
        >
          <Suspense
            fallback={
              <div className="text-muted-foreground flex items-center text-sm">
                <Loader className="mr-2 size-4 animate-spin" />
                Loading...
              </div>
            }
          >
            {preview}
          </Suspense>
        </TabsContent>

        <TabsContent value="code" className="rounded-lg">
          <DynamicCodeBlock
            code={code}
            lang="tsx"
            title={title}
            icon={<ReactIcon />}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
}
