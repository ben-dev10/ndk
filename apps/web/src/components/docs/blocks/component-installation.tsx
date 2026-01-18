"use client";

import { index } from "@/__registry__";
import { cn } from "@_ndk/ui/lib/utils";
import CodeTabs from "@/components/docs/code-tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@_ndk/ui/components/ui/accordion";

interface ComponentInstallationProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export function ComponentInstallation({
  name,
  className,
  ...props
}: ComponentInstallationProps) {
  const component = index[name];

  const commands = {
    npm: `npx shadcn@latest add ${component.command}`,
    pnpm: `pnpm dlx shadcn@latest add ${component.command}`,
    yarn: `npx shadcn@latest add ${component.command}`,
    bun: `bun x --bun shadcn@latest add ${component.command}`,
  };

  return (
    <div className={cn("", className)} {...props}>
      <Accordion type="single" collapsible className="w-full pl-3">
        <AccordionItem value="item-1" className="_cli-item [&_h3]:mb-0">
          <AccordionTrigger className="my-0 max-w-max p-2 opacity-80 hover:no-underline hover:opacity-100">
            CLI installation
          </AccordionTrigger>
          <AccordionContent>
            <CodeTabs codes={commands} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
