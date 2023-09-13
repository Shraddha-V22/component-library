import { IFrame } from "../components";
import { Avatar } from "../libraryComponents";
import DocSection from "./DocSection";

export default function AvatarDocs() {
  return (
    <div className="flex_col">
      <div>
        <h1>Avatar</h1>
        <p>
          An image placeholder designed to represent the user, with a fallback
          option.
        </p>
      </div>

      <div className="container">
        <h2>Component</h2>
        <IFrame codeId="XmQyTIuQhhjL8yQV91kL" />
      </div>

      <div className="container">
        <h2>CSS</h2>
        <IFrame codeId="tKcxQTUYZKXyqc3A5jOd" />
      </div>

      <DocSection
        heading="Avatar with Image"
        componentEx={
          <div className="example_box_flex">
            <Avatar
              url="https://i.pinimg.com/736x/e8/13/92/e81392f7922202ca4db7701a866e356e.jpg"
              fallbackInitials="SV"
              className="sm"
            />
            <Avatar
              url="https://i.pinimg.com/736x/e8/13/92/e81392f7922202ca4db7701a866e356e.jpg"
              fallbackInitials="SV"
              className="md"
            />
            <Avatar
              url="https://i.pinimg.com/736x/e8/13/92/e81392f7922202ca4db7701a866e356e.jpg"
              fallbackInitials="SV"
              className="lg"
            />
          </div>
        }
        description={
          <p>
            <code>Avatar</code> component can be used like this. It comes in
            three sizes, which can be set using classnames <code>sm</code>,
            <code>md</code> and <code>lg</code>. Alternatively, you can add more
            styles by giving the component classname, either normal or tailwind
            classes can be used.
          </p>
        }
        iframe={<IFrame codeId="3hrp3L6fzI2TKq9v22IR" />}
      />
      <DocSection
        heading="Avatar without an Image"
        componentEx={<Avatar fallbackInitials="SV" className="md" />}
        description={
          <p>
            If the image provided is broken or the image is not provided at all,
            then a fallback value can be given to the component via the{" "}
            <code>fallbackInitials</code> prop. <code>fallbackInitials</code>{" "}
            prop takes initials of a user or if a longer name is provided the
            name only the initial two characters will be shown as fallback.
          </p>
        }
        iframe={<IFrame codeId="HzzfMnCKo02tzd0alMGI" />}
      />

      <DocSection
        heading="Avatar with no image and fallback"
        componentEx={<Avatar className="lg" />}
        description={
          <p>
            If the provided image is broken or there is no image provided, as
            well as there is no fallback value is given, The component would
            look like shown above.
          </p>
        }
        iframe={<IFrame codeId="xZ8KMR434BUb3l1oRtpe" />}
      />
    </div>
  );
}
