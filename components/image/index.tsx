import NextJSImage from "next/future/image";

type Props = {
  alt: string;
  height: string;
  src: string;
  width: string;
};

export const Image = ({ alt, height, src, width }: Props) => {
  return (
    <NextJSImage
      alt={alt}
      height={height}
      priority={true}
      src={src}
      style={{ width: "100%" }}
      width={width}
    />
  );
};
