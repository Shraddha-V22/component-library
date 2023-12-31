import "./Badge.css";

export default function Badge({
  type,
  className,
  count,
}: {
  type: string;
  className?: string;
  count?: number | string;
}): JSX.Element | null {
  if (type === "profile") {
    return <div className={`profile ${className}`}></div>;
  }

  if (type === "number") {
    return <div className="number">{count}</div>;
  }

  return null;
}
