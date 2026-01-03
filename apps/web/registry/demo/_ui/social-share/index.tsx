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
import { Mail, Share2 } from "lucide-react";

export default function SocialShareDemo() {
  const styles = {
    button:
      "group dark:hover:bg-primary/10 flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-neutral-200/50",
    icon: "flex size-12 items-center justify-center rounded-full transition-transform",
    label: "text-muted-foreground text-[0.8rem] font-medium",
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
                <IconFacebook />
              </div>
              <span className={`_label ${styles.label}`}>Facebook</span>
            </SocialShareFacebook>

            <SocialShareWhatsApp className={`_whatsapp-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-[#25D366]`}>
                <IconWhatsapp />
              </div>
              <span className={`_label ${styles.label}`}>WhatsApp</span>
            </SocialShareWhatsApp>

            <SocialShareXTwitter className={`_xtwitter-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-black`}>
                <IconXTwitter />
              </div>
              <span className={`_label ${styles.label}`}>XTwitter</span>
            </SocialShareXTwitter>

            <SocialShareLinkedIn className={`_linkedin-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-[#0A66C2]`}>
                <IconLinkedin />
              </div>
              <span className={`_label ${styles.label}`}>LinkedIn</span>
            </SocialShareLinkedIn>

            <SocialShareTelegram className={`_telegram-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-[#26A5E4]`}>
                <IconTelegram />
              </div>
              <span className={`_label ${styles.label}`}>Telegram</span>
            </SocialShareTelegram>

            <SocialShareEmail className={`_email-btn ${styles.button}`}>
              <div className={`_icon-wrapper ${styles.icon} bg-gray-600`}>
                <Mail size={18} />
              </div>
              <span className={`_label ${styles.label}`}>Email</span>
            </SocialShareEmail>
          </SocialShareRoot>
        </PopoverContent>
      </Popover>
    </div>
  );
}
