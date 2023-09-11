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
  icon: JSX.Element | string;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
};

export function FloatingActionButton({
  icon,
  top,
  bottom,
  left,
  right,
}: FloatingActionBtnType) {
  return (
    <button
      style={{ top, right, left, bottom }}
      className={`floating_action_btn`}
    >
      {icon}
    </button>
  );
}
