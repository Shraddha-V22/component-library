import "./Image.css";

export default function Image({
  src,
  alt = "",
  className,
  rounded,
}: {
  src: string;
  alt?: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <img
      className={`image ${className} ${rounded && "rounded"}`}
      src={src}
      alt={alt}
    />
  );
}
