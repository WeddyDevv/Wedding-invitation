import * as React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ArchImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const ArchImage = React.forwardRef<HTMLDivElement, ArchImageProps>(
  ({ className, src, alt = "", ...imgProps }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)}>
        {/* Outer outline */}
        <div className="rounded-t-[999px] rounded-b-xl border border-border p-1">
          {/* Inner outline */}
          <div className="rounded-t-[999px] rounded-b-xl border border-border p-1 overflow-hidden bg-background">
            <AspectRatio ratio={3 / 4}>
              {/* Image with arched top */}
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover rounded-t-[999px] rounded-b-lg"
                {...imgProps}
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    );
  }
);
ArchImage.displayName = "ArchImage";

export default ArchImage;
