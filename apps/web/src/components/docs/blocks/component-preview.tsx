"use client";
import { index } from "@/__registry__";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@_ndk/ui/components/ui/tabs";
import React, { Suspense, useMemo, useState } from "react";
import { DynamicCodeBlock } from "./dynamic-codeblock";
import ReactIcon from "@_ndk/ui/icons/react-icon";
import { ComponentWrapper } from "./component-wrapper";
import { Loader } from "@/components/_ui/loader";
import { ButtonGroupThemeToggle } from "@/registry/components/_ui/theme-toggles";
import PopoverUI from "@/registry/components/_ui/popover-ui";
import { Info } from "lucide-react";
import Link from "next/link";

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
  iframe = false,
  bigScreen = false,
}: {
  name: string;
  title?: string;
  iframe?: boolean;
  bigScreen?: boolean;
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
          <div className="flex w-full items-center justify-between">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <div className="_theme-toggle mr-2 flex items-center gap-3">
              <ButtonGroupThemeToggle size={10} />

              <div className="">
                <PopoverUI
                  align="end"
                  trigger={
                    <Info
                      size={16}
                      className="text-muted-foreground/50 -mb-1"
                    />
                  }
                  content={
                    <p className="text-muted-foreground">
                      See docs for{" "}
                      <Link
                        href="/docs/ui/installation"
                        className="text-primary underline"
                      >
                        installation
                      </Link>{" "}
                      with shadcn/cli or <b>usage</b> on some ndk components
                      used in this preview.
                    </p>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <TabsContent value="preview">
          <ComponentWrapper name={name} iframe={iframe} bigScreen={bigScreen}>
            <Suspense fallback={<Loader />}>{preview}</Suspense>
          </ComponentWrapper>
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
