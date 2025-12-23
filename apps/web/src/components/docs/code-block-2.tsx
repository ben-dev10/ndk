import * as Base from "fumadocs-ui/components/codeblock";
import { highlight } from "fumadocs-core/highlight";
import { type HTMLAttributes } from "react";

export async function CodeBlock2({
  code,
  lang,
  title,
  ...rest
}: HTMLAttributes<HTMLElement> & {
  code: string;
  lang: string;
  title?: string;
}) {
  const rendered = await highlight(code, {
    lang,
    components: {
      pre: (props) => <Base.Pre className="" {...props} />,
    },
  });
  return (
    <Base.CodeBlock
      className="_code-block relative z-1 mt-0 mb-0 max-h-[350px] min-h-[350px] rounded-lg border-[5px] pt-0"
      {...rest}
    >
      {title && (
        <div className="bg-border absolute top-0 z-50 flex h-[50px] w-full items-center px-3">
          {title}
        </div>
      )}

      <div
        className={`${title ? "mt-[calc(50px-0.875rem)] h-[calc(350px-(50px+0.875rem))] pt-5" : ""} min-h-full pt-0`}
      >
        {rendered}
      </div>
    </Base.CodeBlock>
  );
}
