import { cn } from "@_ndk/ui/utils";
import { ArrowDownRight } from "lucide-react";
import { Badge } from "@_ndk/ui/components/ui/badge";

export default function DocBadges({
  pills,
  className,
}: {
  pills: string[] | undefined;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex items-center gap-2">
        {pills?.map((item, index) => (
          <Badge
            key={index}
            className="bg-secondary text-foreground rounded-full text-[0.85rem]"
          >
            <ArrowDownRight className="text-muted-foreground" />
            <span className="">{item}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
