import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@_ndk/ui/components/ui/tabs";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";
import { DynamicCodeBlock } from "./dynamic-codeblock";
import ReactIcon from "@_ndk/ui/icons/react-icon";

export default function ComponentPreview({
  preview,
  code,
  title,
}: {
  preview: React.ReactNode;
  code: string;
  title?: string;
}) {
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
