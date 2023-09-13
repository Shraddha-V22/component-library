import "./Text.css";

export default function Text({
  variant,
  children,
  cite,
  className,
}: {
  variant: string;
  children: React.ReactNode;
  cite?: string;
  className?: string;
}): JSX.Element {
  switch (variant) {
    case "small":
      return <small className={className}>{children}</small>;
    case "p":
      return <p className={className}>{children}</p>;
    case "blockquote":
      return (
        <blockquote
          className={`${className} blockquote`}
          cite={variant === "blockquote" ? cite : ""}
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
