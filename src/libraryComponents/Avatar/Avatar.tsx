import { useState } from "react";
import "./Avatar.css";

type AvatarType = {
  url?: string;
  fallbackInitials?: string;
  className?: string;
};
export default function Avatar({
  url = "",
  fallbackInitials = "",
  className = "sm",
}: AvatarType) {
  const [isUrlBroken, setIsUrlBroken] = useState<boolean>(false);

  return (
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
  );
}
