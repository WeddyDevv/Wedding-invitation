import React, { useId } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

// Oval image with double-outline effect using SVG
const OvalImage: React.FC<Props> = ({ src, alt, className }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 640 800" className={className} role="img" aria-hidden={false}>
      <defs>
        <clipPath id={`oval-${id}`}>
          <ellipse cx="320" cy="400" rx="260" ry="340" />
        </clipPath>
      </defs>

      <image
        href={src}
        width="640"
        height="800"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#oval-${id})`}
      >
        <title>{alt}</title>
      </image>

      {/* Double outline */}
      <ellipse
        cx="320"
        cy="400"
        rx="262"
        ry="342"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        opacity="0.9"
      />
      <ellipse
        cx="350"
        cy="380"
        rx="280"
        ry="360"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
};

export default OvalImage;
