import { cn } from "@_ndk/ui/utils";

type AcmeLogoProps = React.SVGProps<SVGSVGElement>;

export function AcmeLogoSimple({ className, ...props }: AcmeLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
      viewBox="0 0 4.92 5.04"
      {...props}
    >
      <g id="acme-logo">
        <path
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".2px"
          d="M4.78,2.92c-.41.03-.96.31-1.34.53-.03-.23-.08-.42-.12-.57-1.41.4-1.79,1.99-1.79,1.99l-1.43.07C.45,2.93,2.11,1.53,2.11,1.53l-1.6.46c-.06-.41.37-1.14.37-1.14.39-.26,1.08-.63,1.99-.72.36-.04.68-.03.96,0,.59,1.14.85,2.07.95,2.79Z"
        />
        <path
          fill="currentColor"
          opacity={0.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".2px"
          d="M4.82,3.85c-.03.64-.19.95-.19.95l-1.43.12c.09-.18.19-.47.23-.84.61-.35,1.1-.32,1.39-.23Z"
        />
      </g>
    </svg>
  );
}

export function AcmeLogoRounded({
  className,
  circleColor,
  ...props
}: AcmeLogoProps & {
  circleColor: string;
}) {
  return (
    <svg
      className={cn("size-5", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7.94 7.94"
      {...props}
    >
      <g id="acme-logo-round-2">
        <circle
          fill="currentColor"
          className={cn("fill-blue-500", circleColor)}
          strokeWidth={0}
          cx="3.97"
          cy="3.97"
          r="3.97"
        />
        <g>
          <path
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".2px"
            d="M6.25,3.86c-.41.03-.96.31-1.34.53-.03-.23-.08-.42-.12-.57-1.41.4-1.79,1.99-1.79,1.99l-1.43.07c.35-2.01,2.01-3.41,2.01-3.41l-1.6.46c-.06-.41.37-1.14.37-1.14.39-.26,1.08-.63,1.99-.72.36-.04.68-.03.96,0,.59,1.14.85,2.07.95,2.79Z"
          />
          <path
            fill="currentColor"
            opacity={0.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".2px"
            d="M6.29,4.79c-.03.64-.19.95-.19.95l-1.43.12c.09-.18.19-.47.23-.84.61-.35,1.1-.32,1.39-.23Z"
          />
        </g>
      </g>
    </svg>
  );
}
