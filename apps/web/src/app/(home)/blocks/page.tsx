import Section from "@_ndk/ui/components/_ui/section";
import React from "react";
import { contentHeight } from "../page";

export default function BlocksPage() {
  return (
    <Section.RootElement>
      <Section.Container className="container-8xl px-(--gutter-x) py-6">
        <div className={`_main ${contentHeight}`}>
          <h2>UI Blocks.</h2>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
