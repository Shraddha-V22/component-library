import { useState } from "react";
import "./Avatar.css";

type AvatarType = {
  url?: string;
  fallbackInitials?: string;
  className?: string;
  children?: React.ReactNode;
};
export default function Avatar({
  url = "",
  fallbackInitials = "",
  className = "sm",
  children,
}: AvatarType): JSX.Element {
  const [isUrlBroken, setIsUrlBroken] = useState<boolean>(false);

  return (
    <div className="avatar_container">
      {children}
      <div className={`avatar ${className}`}>
        {!isUrlBroken && (
          <img
            src={url}
            alt=""
            className="avatar_img"
            onLoad={() => setIsUrlBroken(false)}
            onError={() => setIsUrlBroken(true)}
          />
        )}
        {isUrlBroken && (
          <p className="avatar_fallback">
            {fallbackInitials.length === 2
              ? fallbackInitials
              : fallbackInitials.substring(0, 2)}
          </p>
        )}
      </div>
    </div>
  );
}
