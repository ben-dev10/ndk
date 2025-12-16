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
  title = "UI clone",
  desc = "Checkout this cool UI clone I found",
  url,
}: {
  title?: string;
  desc?: string;
  url?: string;
}) {
  const handleShare = async () => {
    if (!navigator.share) {
      alert("Share API not supported on this browser");
      return;
    }

    try {
      await navigator.share({
        title: title,
        text: desc,
        url: url ? url : window.location.href,
      });
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Error sharing:", error);
      }
    }
  };
  return handleShare;
}
