import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
  className?: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, className, ...rest } = props;

  return (
    <>
      <Image
        {...rest}
        src={srcLight}
        className={`${className} imgLight block dark:hidden`}
      />
      <Image
        {...rest}
        src={srcDark}
        className={`${className} imgDark hidden dark:block`}
      />
    </>
  );
};

export default ThemeImage;
