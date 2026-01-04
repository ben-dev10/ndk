/* eslint-disable @next/next/no-img-element */
/* USAGE:
 *
 *  <ThemeImage
 *     srcLight="/imgs/ndk-banner--light.webp"
 *     srcDark="/imgs/ndk-banner--dark.webp"
 *     alt="img"
 *   />
 */

import { cn } from "@_ndk/ui/utils";

export type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  srcLight: string;
  srcDark: string;
  className?: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, className, ...rest } = props;

  return (
    <>
      <img
        {...rest}
        src={srcLight}
        className={cn("imgLight block w-full dark:hidden", className)}
      />
      <img
        {...rest}
        src={srcDark}
        className={cn("imgDark hidden w-full dark:block", className)}
      />
    </>
  );
};

export default ThemeImage;
