import * as Base from "fumadocs-ui/components/codeblock";
import { highlight } from "fumadocs-core/highlight";
import { type HTMLAttributes } from "react";

export async function CodeBlockServer({
  code,
  lang,
  ...rest
}: HTMLAttributes<HTMLElement> & {
  code: string;
  lang: string;
}) {
  const rendered = await highlight(code, {
    lang,
    components: {
      pre: (props) => <Base.Pre className="" {...props} />,
    },
  });
  return (
    <Base.CodeBlock className="" {...rest}>
      {rendered}
    </Base.CodeBlock>
  );
}
