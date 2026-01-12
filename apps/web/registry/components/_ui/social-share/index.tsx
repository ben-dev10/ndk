"use client";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { useCopyToClipboard } from "@/registry/hooks/use-clipboard";

type SocialShareContextType = {
  encodedUrl: string;
  encodedTitle: string;
  encodedDescription: string;
  handleShare: (shareUrl: string) => void;
};

const SocialShareContext = createContext<SocialShareContextType>({
  encodedUrl: "",
  encodedTitle: "",
  encodedDescription: "",
  handleShare: () => {},
});

export type SocialShareRootProps = React.ComponentProps<"div"> & {
  url?: string;
  title?: string;
  description?: string;
};

export function SocialShareRoot({
  url,
  title = "Check this out!",
  description = "I found something interesting to share with you",
  children,
  ...props
}: SocialShareRootProps) {
  const [resolvedUrl, setResolvedUrl] = useState<string>(url ?? "");

  useEffect(() => {
    if (url) {
      setResolvedUrl(url);
    } else if (typeof window !== "undefined") {
      setResolvedUrl(window.location.href);
    }
  }, [url]);

  const encodedUrl = useMemo(
    () => encodeURIComponent(resolvedUrl || ""),
    [resolvedUrl],
  );

  const encodedTitle = useMemo(() => encodeURIComponent(title), [title]);
  const encodedDescription = useMemo(
    () => encodeURIComponent(description),
    [description],
  );

  const handleShare = (shareUrl: string) => {
    if (typeof window !== "undefined") {
      window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer,width=600,height=600",
      );
    }
  };

  return (
    <SocialShareContext.Provider
      value={{
        encodedUrl,
        encodedTitle,
        encodedDescription,
        handleShare,
      }}
    >
      <div {...props}>{children}</div>
    </SocialShareContext.Provider>
  );
}

export type SocialShareFacebookProps = React.ComponentProps<"button">;

export function SocialShareFacebook({ ...props }: SocialShareFacebookProps) {
  return (
    <SocialShareContext.Consumer>
      {({ encodedUrl, handleShare }) => (
        <button
          {...props}
          onClick={() =>
            handleShare(
              `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            )
          }
        />
      )}
    </SocialShareContext.Consumer>
  );
}

export type SocialShareXTwitterProps = React.ComponentProps<"button">;

export function SocialShareXTwitter({ ...props }: SocialShareXTwitterProps) {
  return (
    <SocialShareContext.Consumer>
      {({ encodedUrl, encodedTitle, handleShare }) => (
        <button
          {...props}
          onClick={() =>
            handleShare(
              `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            )
          }
        />
      )}
    </SocialShareContext.Consumer>
  );
}

export type SocialShareLinkedInProps = React.ComponentProps<"button">;

export function SocialShareLinkedIn({ ...props }: SocialShareLinkedInProps) {
  return (
    <SocialShareContext.Consumer>
      {({ encodedUrl, handleShare }) => (
        <button
          {...props}
          onClick={() =>
            handleShare(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            )
          }
        />
      )}
    </SocialShareContext.Consumer>
  );
}

export type SocialShareWhatsAppProps = React.ComponentProps<"button">;

export function SocialShareWhatsApp({ ...props }: SocialShareWhatsAppProps) {
  return (
    <SocialShareContext.Consumer>
      {({ encodedUrl, encodedTitle, handleShare }) => (
        <button
          {...props}
          onClick={() =>
            handleShare(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`)
          }
        />
      )}
    </SocialShareContext.Consumer>
  );
}

export type SocialShareTelegramProps = React.ComponentProps<"button">;

export function SocialShareTelegram({ ...props }: SocialShareTelegramProps) {
  return (
    <SocialShareContext.Consumer>
      {({ encodedUrl, encodedTitle, handleShare }) => (
        <button
          {...props}
          onClick={() =>
            handleShare(
              `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
            )
          }
        />
      )}
    </SocialShareContext.Consumer>
  );
}

export type SocialShareEmailProps = React.ComponentProps<"button">;

export function SocialShareEmail({ ...props }: SocialShareEmailProps) {
  return (
    <SocialShareContext.Consumer>
      {({ encodedUrl, encodedDescription, encodedTitle, handleShare }) => (
        <button
          {...props}
          onClick={() =>
            handleShare(
              `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
            )
          }
        />
      )}
    </SocialShareContext.Consumer>
  );
}

export type SocialShareLinkProps = React.ComponentProps<"button"> & {
  timeout?: number | undefined;
  onCopiedChange?: (isCopied: boolean) => void;
};

export function SocialShareLink({
  timeout = 100,
  onCopiedChange,
  ...props
}: SocialShareLinkProps) {
  const [url, setURL] = useState("");
  const { isCopied, copyToClipboard } = useCopyToClipboard({
    timeout: timeout,
  });

  useEffect(() => {
    setURL(window.location.href);

    onCopiedChange?.(isCopied);
  }, [isCopied, onCopiedChange]);

  return <button {...props} onClick={() => copyToClipboard(url)} />;
}
