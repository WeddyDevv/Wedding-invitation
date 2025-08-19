import React, { useId } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

// SVG teardrop mask with a thin border using design system tokens
const TeardropImage: React.FC<Props> = ({ src, alt, className }) => {
  const id = useId();
  // Viewbox is square-ish to keep symmetry of the drop
  return (
    <svg
      viewBox="0 0 512 640"
      className={className}
      aria-hidden={false}
      role="img"
    >
      <defs>
        <clipPath id={`clip-${id}`} clipPathUnits="objectBoundingBox">
          {/* Path scaled to objectBoundingBox by using 0..1 coordinates */}
          <path d="M0.5,0.0 C0.78,0.0 1.0,0.23 1.0,0.45 C1.0,0.64 0.82,0.78 0.68,0.90 C0.60,0.96 0.54,1.0 0.5,1.0 C0.46,1.0 0.40,0.96 0.32,0.90 C0.18,0.78 0.0,0.64 0.0,0.45 C0.0,0.23 0.22,0.0 0.5,0.0 Z" />
        </clipPath>
      </defs>

      {/* Image clipped to teardrop */}
      <image
        href={src}
        width="512"
        height="640"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#clip-${id})`}
      >
        <title>{alt}</title>
      </image>

      {/* Double border outline matching the clip path (using same path) */}
      <path
        d="M256,0 C399,0 512,147 512,288 C512,405 420,478 350,536 C309,569 276,592 256,592 C236,592 203,569 162,536 C92,478 0,405 0,288 C0,147 113,0 256,0 Z"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        opacity="0.9"
        transform="translate(0,24)"
      />
      <path
        d="M256,0 C399,0 512,147 512,288 C512,405 420,478 350,536 C309,569 276,592 256,592 C236,592 203,569 162,536 C92,478 0,405 0,288 C0,147 113,0 256,0 Z"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        opacity="0.6"
        transform="translate(14,36)"
      />
    </svg>
  );
};

export default TeardropImage;
