"use client";

import { index } from "@/__registry__";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { useMemo } from "react";
import { DynamicCodeBlock2 } from "./dynamic-codeblock-2";
import ReactIcon from "@_ndk/ui/icons/react-icon";

export default function ComponentCodeTabs({
  name,
  fileName,
  usage,
}: {
  name: string;
  fileName: string;
  usage: string;
}) {
  const code = useMemo(() => {
    const code = index[name]?.files?.[0]?.content;

    if (!code) {
      console.error(`Component with name "${name}" not found in registry.`);
      return null;
    }

    return code;
  }, [name]);

  return (
    <section className="_component-code-tabs">
      <Tabs items={["Usage", fileName]}>
        <Tab value="Usage">
          <DynamicCodeBlock2 code={usage} lang="tsx" icon={<ReactIcon />} />
        </Tab>
        <Tab value={fileName}>
          <DynamicCodeBlock2 code={code} lang="tsx" icon={<ReactIcon />} />
        </Tab>
      </Tabs>
    </section>
  );
}
