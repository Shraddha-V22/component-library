import "./Text.css";

export default function Text({
  varient,
  children,
  cite,
  className,
}: {
  varient: string;
  children: React.ReactNode;
  cite?: string;
  className?: string;
}) {
  switch (varient) {
    case "small":
      return <small className={className}>{children}</small>;
    case "p":
      return <p className={className}>{children}</p>;
    case "blockquote":
      return (
        <blockquote
          className={`${className} blockquote`}
          cite={varient === "blockquote" ? cite : ""}
        >
          {children}
        </blockquote>
      );
    case "q":
      return <q className={className}>{children}</q>;
    default:
      return <p className={className}>{children}</p>;
  }
}
