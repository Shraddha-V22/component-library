import "./Alert.css";

export default function Alert({
  type,
  text,
  className,
}: {
  type?: string;
  text: string;
  className?: string;
}): JSX.Element {
  const iconByType = function (type: string) {
    switch (type) {
      case "success":
        return <p className="temp_icon">✓</p>;

      case "warning":
        return <p className="temp_icon">!</p>;

      case "info":
        return <p className="temp_icon">i</p>;

      case "error":
        return <p className="temp_icon">?</p>;

      default:
        return null;
    }
  };

  return (
    <div className={`alert ${type} ${type && "alert_grid"} ${className}`}>
      {type && iconByType(type)}
      <p className="alert_text">{text}</p>
    </div>
  );
}
