import { Mail, Share2 } from "lucide-react";
import {
  FacebookIcon,
  XTwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from "@/registry/components/_ui/social-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@_ndk/ui/components/ui/popover";
import { Button } from "@_ndk/ui/components/ui/button";
import { cn } from "@_ndk/ui/utils";

interface ShareProps {
  url?: string;
  title?: string;
  description?: string;
  triggerStyles?: string;
  className?: string;
  showLabels?: boolean;
}

export default function SocialShare({
  url = window.location.href,
  title = "Check this out!",
  description = "I found something interesting to share with you",
  triggerStyles,
  className,
  showLabels = false,
}: ShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877F2]",
    },
    {
      name: "Twitter",
      icon: XTwitterIcon,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-black",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0A66C2]",
    },
    {
      name: "WhatsApp",
      icon: WhatsappIcon,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "bg-[#25D366]",
    },
    {
      name: "Telegram",
      icon: TelegramIcon,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-[#26A5E4]",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: "bg-gray-600",
    },
  ];

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "bg-secondary hover:bg-secondary/60 text-foreground",
            triggerStyles,
          )}
          title="Share this link"
        >
          <Share2 size={16} className="-ml-1" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "text-foreground rounded-2xl bg-neutral-50 p-2 dark:bg-neutral-900",
          className,
        )}
      >
        <div className="grid grid-cols-3">
          {shareLinks.map((platform) => {
            const Icon = platform.icon;

            return (
              <button
                key={platform.name}
                onClick={() => handleShare(platform.url)}
                className="group dark:hover:bg-primary/10 flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-neutral-200/50"
              >
                <div
                  className={`${platform.color} flex size-12 items-center justify-center rounded-full transition-transform`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                {showLabels && (
                  <span className="text-muted-foreground text-[0.8rem] font-medium">
                    {platform.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
