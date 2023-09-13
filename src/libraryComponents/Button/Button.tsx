import "./Button.css";

export default function Button({
  btnText,
  className,
  icon,
  onClick,
}: {
  btnText?: string;
  className?: string;
  icon?: JSX.Element | string;
  onClick: () => any;
}) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {icon && icon} {btnText}
    </button>
  );
}

type FloatingActionBtnType = {
  onClick: () => any;
  icon: JSX.Element | string;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  className?: string;
};

export function FloatingActionButton({
  onClick,
  icon,
  top,
  bottom,
  left,
  right,
  className,
}: FloatingActionBtnType): JSX.Element {
  return (
    <button
      style={{ top, right, left, bottom }}
      className={`floating_action_btn ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
