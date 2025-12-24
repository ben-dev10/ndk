import {
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
} from "fumadocs-ui/components/codeblock";
import { DynamicCodeBlock2 } from "./dynamic-codeblock-2";

export default function CodeTabs({ codes }: { codes: Record<string, string> }) {
  return (
    <div>
      <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
        <CodeBlockTabsList className="rounded-tl-xl rounded-tr-xl bg-white/70 dark:bg-black/30">
          <CodeBlockTabsTrigger value="npm">npm</CodeBlockTabsTrigger>
          <CodeBlockTabsTrigger value="pnpm">pnpm</CodeBlockTabsTrigger>
          <CodeBlockTabsTrigger value="yarn">yarn</CodeBlockTabsTrigger>
          <CodeBlockTabsTrigger value="bun">bun</CodeBlockTabsTrigger>
        </CodeBlockTabsList>

        <>
          <CodeBlockTab value="npm">
            <DynamicCodeBlock2
              className=""
              lang="bash"
              code={`${codes["npm"]}`}
            />
          </CodeBlockTab>
          <CodeBlockTab value="pnpm">
            <DynamicCodeBlock2
              className=""
              lang="bash"
              code={`${codes["pnpm"]}`}
            />
          </CodeBlockTab>
          <CodeBlockTab value="yarn">
            <DynamicCodeBlock2
              className=""
              lang="bash"
              code={`${codes["yarn"]}`}
            />
          </CodeBlockTab>
          <CodeBlockTab value="bun">
            <DynamicCodeBlock2
              className=""
              lang="bash"
              code={`${codes["bun"]}`}
            />
          </CodeBlockTab>
        </>
      </CodeBlockTabs>
    </div>
  );
}
