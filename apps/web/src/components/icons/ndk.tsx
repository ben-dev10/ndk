import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NDKIcon({ title = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 31 31" {...props}>
      <title>{title}</title>
      <g id="ndk-dark">
        <circle
          cx="15.5"
          cy="15.5"
          r="15"
          fill="#231f20"
          stroke="#414042"
          strokeMiterlimit="10"
        />
        <g id="ndk">
          <path
            d="M19.57,28.02l2.05-1.86-7.17-7.89-2.12,1.93,2.25,2.47,2.26,2.18-1.78-.64-5.56-1.44-2.12,1.93,4.99,5.48c1.01.21,2.05.32,3.13.32.34,0,.68-.01,1.01-.04l-1.83-2.01-2.52-2.38,1.79.59,5.62,1.36Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="M25.95,15.01c-2.07-2.27-5.12-2.55-7.45-.43l-3.4,3.1,7.17,7.89,3.44-3.13c2.33-2.12,2.3-5.15.24-7.43ZM23.88,20.66l-1.2,1.09-3.75-4.12,1.16-1.06c1.24-1.12,2.56-.69,3.62.48,1.06,1.16,1.4,2.49.17,3.61Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="M30.49,15.3l-.42-.47-.04-2.2.21.07c-.29-1.56-.83-3.02-1.56-4.37-.36-.66-.77-1.29-1.23-1.89l-.09.08.19,3.59.23,2.33-1.2-1.44-1.88-2.06-2.12,1.93,7.18,7.88.48-.43h0c.17-.92.26-1.86.26-2.82,0-.07,0-.13,0-.2Z"
            fill="#fff"
            strokeWidth="0"
          />
        </g>
      </g>
    </svg>
  );
}

export default NDKIcon;
