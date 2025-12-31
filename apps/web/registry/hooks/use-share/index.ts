"use client";

/*
 * USAGE:
 * useShare returns an event handler function that calls the browser's
 * navigator API to share the current window's URL along with some title
 * and description.
 *
 * const handleClick = useShare({title:"", desc:""})
 *
 * <button onClick={handleClick}> Share this link </button />
 */

export default function useShare({
  title = "UI Resource",
  desc = "Checkout this cool site I found!",
  url,
}: {
  title?: string;
  desc?: string;
  url?: string;
}) {
  const handleShare = async () => {
    if (!navigator.share) {
      const isSecureContext = window.isSecureContext;
      const inIframe = window.self !== window.top;
      const errorMsg = `Share API not supported: ${
        !isSecureContext ? "⚠️ Connection not HTTPS" : ""
      } ${inIframe ? "⚠️ In iframe (may restrict Share)" : ""}`.trim();

      alert(errorMsg || "Share API not supported on this browser");
      return;
    }

    try {
      const shareData: ShareData = {
        title: title,
        text: desc,
        url: url || window.location.href,
      };

      await navigator.share(shareData);
    } catch (error) {
      const errorName = (error as Error).name;
      if (errorName !== "AbortError") {
        console.error("Share API error:", error);
        alert(`Share failed: ${(error as Error).message || errorName}`);
      }
    }
  };
  return handleShare;
}
