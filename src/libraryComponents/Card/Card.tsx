import "./Card.css";

export default function Card({
  children,
  horizontal,
  className,
}: {
  children: React.ReactNode;
  horizontal?: boolean;
  className?: string;
}) {
  return (
    <div className={`card ${className}`}>
      <div className={`card_content ${horizontal && "horizontal"}`}>
        {children}
      </div>
    </div>
  );
}

export function Badge({
  badge,
  className,
}: {
  badge: string;
  className?: string;
}) {
  return <div className={`badge ${className}`}>{badge}</div>;
}

export function CardMedia({ img }: { img: string }) {
  return <img src={img} className="card_img" />;
}

export function CardText({
  heading,
  subHeading,
  text,
  overlay,
}: {
  heading: string;
  subHeading: string;
  text: string;
  overlay?: boolean;
}) {
  return (
    <div className={`card_text ${overlay && "overlay"}`}>
      <h2>{heading}</h2>
      <h4>{subHeading}</h4>
      <p>{text}</p>
    </div>
  );
}
