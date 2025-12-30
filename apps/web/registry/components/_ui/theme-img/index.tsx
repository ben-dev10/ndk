/* eslint-disable @next/next/no-img-element */
/* USAGE:
 *
 *  <ThemeImage
 *     srcLight="/imgs/ndk-banner--light.webp"
 *     srcDark="/imgs/ndk-banner--dark.webp"
 *     alt="img"
 *   />
 */

export type Props = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "className"
> & {
  srcLight: string;
  srcDark: string;
  className: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, className, ...rest } = props;

  return (
    <>
      <img
        {...rest}
        src={srcLight}
        className="imgLight block w-full dark:hidden"
      />
      <img
        {...rest}
        src={srcDark}
        className={` ${className} imgDark hidden w-full dark:block`}
      />
    </>
  );
};

export default ThemeImage;
