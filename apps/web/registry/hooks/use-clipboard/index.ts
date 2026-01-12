"use client";
import * as React from "react";

/* USAGE:
 *  const { copyToClipboard, isCopied } = useCopyToClipboard({timeout: 100, onCopy() {
 *        // do something
 *  })
 *
 *  <button onClick={() => {copyToClipboard(url: string);}}>
 *    {isCopied ? <Check /> : <Copy />}
 *  </button>
 *
 *  });
 */
export function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: {
  timeout?: number;
  onCopy?: () => void;
} = {}) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = (value: string) => {
    if (typeof window === "undefined" || !navigator?.clipboard?.writeText) {
      return;
    }

    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      if (onCopy) {
        onCopy();
      }

      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    }, console.error);
  };

  return { isCopied, copyToClipboard };
}
