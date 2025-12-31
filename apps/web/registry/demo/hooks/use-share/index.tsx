import useShare from "@/registry/hooks/use-share";
import { Button } from "@_ndk/ui/components/ui/button";
import { Share2 } from "lucide-react";

export default function UseShareDemo() {
  const handleClick = useShare({
    title: "NDK UI Components",
    desc: "Check out this cool new JS library i found!",
  });
  return (
    <div>
      <Button onClick={handleClick} size="icon-sm">
        <Share2 />
      </Button>
    </div>
  );
}
