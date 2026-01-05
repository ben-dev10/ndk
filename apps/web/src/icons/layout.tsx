import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutDuotone({ title, ...props }: IconProps) {
  return (
    <svg
      id="layout-duotone"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path d="M0 0H256V256H0z" fill="none" />
        <path d="M104,208V104H32v96a8,8,0,0,0,8,8H96" opacity=".2" />
        <path
          d="M32 104L224 104"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <path
          d="M104 104L104 208"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <rect
          height="160"
          width="192"
          fill="none"
          rx="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          x="32"
          y="48"
        />
      </g>
    </svg>
  );
}

export default LayoutDuotone;
