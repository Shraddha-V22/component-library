import { IFrame } from "../components";
import { Avatar, Badge } from "../libraryComponents";
import DocSection from "./DocSection";

export default function BadgeDocs() {
  return (
    <div>
      <div>
        <h1>Badge</h1>
        <p>
          A badge component to visually convey information, such as status,
          notifications, or labels, typically positioned near or on top of other
          UI elements.
        </p>
      </div>

      <DocSection
        heading="Number Badge"
        componentEx={
          <div style={{ position: "relative", width: "fit-content" }}>
            <p style={{ fontSize: "2rem" }}>🔔</p>
            <Badge type="number" count="2" />
          </div>
        }
        description={
          <p>
            The Number badge indicates the number of items a component has, for
            example notifications, cart items, etc. To get the number badge,
            type should be given as number and count indicates the number of
            items, which can be either string or a number.
          </p>
        }
        iframe={<IFrame codeId="" />}
      />

      <DocSection
        heading="Profile Badge"
        componentEx={
          <div className="example_box_flex">
            <Avatar
              url="https://i.pinimg.com/736x/e8/13/92/e81392f7922202ca4db7701a866e356e.jpg"
              fallbackInitials="SV"
              className="sm"
            >
              <Badge type="profile" className="badge_status online" />
            </Avatar>
            <Avatar
              url="https://i.pinimg.com/736x/e8/13/92/e81392f7922202ca4db7701a866e356e.jpg"
              fallbackInitials="SV"
              className="md"
            >
              <Badge type="profile" className="badge_status idle" />
            </Avatar>
            <Avatar
              url="https://i.pinimg.com/736x/e8/13/92/e81392f7922202ca4db7701a866e356e.jpg"
              fallbackInitials="SV"
              className="lg"
            >
              <Badge type="profile" className="badge_status dnd" />
            </Avatar>
            <Avatar
              url="https://i.pinimg.com/736x/e8/13/92/e81392f7922202ca4db7701a866e356e.jpg"
              fallbackInitials="SV"
              className="lg"
            >
              <Badge type="profile" className="badge_status offline" />
            </Avatar>
          </div>
        }
        description={
          <p>
            The Number badge indicates the number of items a component has, for
            example notifications, cart items, etc. To get the number badge,
            type should be given as number and count indicates the number of
            items, which can be either string or a number.
          </p>
        }
        iframe={<IFrame codeId="" />}
      />
    </div>
  );
}
