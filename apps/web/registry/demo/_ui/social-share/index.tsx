import {
  IconFacebook,
  IconLinkedin,
  IconTelegram,
  IconWhatsapp,
  IconXTwitter,
} from "@/registry/components/_ui/social-icons";
import {
  SocialShareEmail,
  SocialShareFacebook,
  SocialShareLink,
  SocialShareLinkedIn,
  SocialShareRoot,
  SocialShareTelegram,
  SocialShareWhatsApp,
  SocialShareXTwitter,
} from "@/registry/components/_ui/social-share";
import { Button } from "@_ndk/ui/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@_ndk/ui/components/ui/popover";
import { Facebook, Link, Mail, Share2 } from "lucide-react";
import { useState } from "react";

export default function SocialShareDemo() {
  const [isCopied, setCopied] = useState(false);

  const styles = {
    button:
      "dark:hover:bg-primary/10 flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-neutral-200/50",
    icon: "flex size-12 items-center justify-center rounded-full transition-transform",
    label: "text-muted-foreground text-[0.8rem] font-medium",
  };

  const simpleStyles = {
    button:
      "dark:hover:bg-primary/10 flex flex-col items-center gap-2 rounded-xl transition-colors hover:bg-neutral-200/50",
    icon: "flex size-8 items-center justify-center rounded-md transition-transform bg-neutral-500 hover:bg-neutral-600 dark:hover:bg-neutral-600 dark:bg-neutral-700",
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="bg-secondary hover:bg-secondary/60 text-foreground"
            title="Share this link"
          >
            <Share2 size={16} className="-ml-1" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="text-foreground rounded-2xl bg-neutral-50 p-2 dark:bg-neutral-900">
          <SocialShareRoot
            title="NDK UI"
            description="UI Components and a toolkit for front-end development"
            className="grid grid-cols-3"
          >
            <SocialShareFacebook className={`_facebook-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-[#1877F2]`}>
                <IconFacebook className="text-white" />
              </div>
              <span className={`_label ${styles.label}`}>Facebook</span>
            </SocialShareFacebook>

            <SocialShareWhatsApp className={`_whatsapp-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-[#25D366]`}>
                <IconWhatsapp className="text-white" />
              </div>
              <span className={`_label ${styles.label}`}>WhatsApp</span>
            </SocialShareWhatsApp>

            <SocialShareXTwitter className={`_xtwitter-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-black`}>
                <IconXTwitter className="text-white" />
              </div>
              <span className={`_label ${styles.label}`}>XTwitter</span>
            </SocialShareXTwitter>

            <SocialShareLinkedIn className={`_linkedin-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-[#0A66C2]`}>
                <IconLinkedin className="text-white" />
              </div>
              <span className={`_label ${styles.label}`}>LinkedIn</span>
            </SocialShareLinkedIn>

            <SocialShareTelegram className={`_telegram-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-[#26A5E4]`}>
                <IconTelegram className="text-white" />
              </div>
              <span className={`_label ${styles.label}`}>Telegram</span>
            </SocialShareTelegram>

            <SocialShareEmail className={`_email-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-gray-600`}>
                <Mail className="text-white" size={18} />
              </div>
              <span className={`_label ${styles.label}`}>Email</span>
            </SocialShareEmail>
          </SocialShareRoot>
        </PopoverContent>
      </Popover>

      <div className="mt-5">
        <small>Share this post</small>
        <div className="">
          <SocialShareRoot
            title="NDK UI"
            description="UI Components and a toolkit for front-end development"
            className="flex gap-2"
          >
            <SocialShareFacebook
              className={`_facebook-btn ${simpleStyles.button}`}
            >
              <div className={`_icon-wrapper ${simpleStyles.icon} `}>
                <Facebook size={16} className="fill-white text-white" />
              </div>
            </SocialShareFacebook>

            <SocialShareWhatsApp
              className={`_whatsapp-btn ${simpleStyles.button}`}
            >
              <div className={`_icon-wrapper ${simpleStyles.icon} `}>
                <IconWhatsapp className="size-5.5 text-white" />
              </div>
            </SocialShareWhatsApp>

            <SocialShareXTwitter
              className={`_xtwitter-btn ${simpleStyles.button}`}
            >
              <div className={`_icon-wrapper ${simpleStyles.icon} `}>
                <IconXTwitter className="size-5.5 text-white" />
              </div>
            </SocialShareXTwitter>

            <SocialShareLinkedIn
              className={`_linkedin-btn ${simpleStyles.button}`}
            >
              <div className={`_icon-wrapper ${simpleStyles.icon} `}>
                <IconLinkedin className="size-6 text-white" />
              </div>
            </SocialShareLinkedIn>

            <SocialShareLink
              onCopiedChange={setCopied}
              timeout={1200}
              className={`_linkedin-btn relative ${simpleStyles.button}`}
            >
              {isCopied ? (
                <p className="absolute bottom-3 text-[0.9rem] text-green-600">
                  Copied!
                </p>
              ) : (
                ""
              )}

              <div className={`_icon-wrapper ${simpleStyles.icon}`}>
                <Link size={16} className="text-white" />
              </div>
            </SocialShareLink>
          </SocialShareRoot>
        </div>
      </div>
    </div>
  );
}
