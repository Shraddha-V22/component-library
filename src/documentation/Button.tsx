import { IFrame } from "../components";
import { Button } from "../libraryComponents";
import { FloatingActionButton } from "../libraryComponents/Button/Button";
import DocSection from "./DocSection";

export default function ButtonDocs() {
  return (
    <div className="flex_col">
      <div className="container">
        <h1>Button</h1>
        <p>Button or a component resembling a button.</p>
      </div>

      <div className="container">
        <h2>Component</h2>
        <IFrame codeId="WfZtkKadotjJW9LFl7hH" />
      </div>

      <div className="container">
        <h2>CSS</h2>
        <IFrame codeId="5Qyxae4KAqGORXQP2ovc" />
      </div>

      <DocSection
        heading="Simple Button Component"
        componentEx={<Button btnText="click me" onClick={() => {}} />}
        description={
          <p>
            This is a simple functional button. It receives a prop{" "}
            <code>onClick</code> which is function that would be called
            everytime the button is clicked. It can be customized by giving
            either tailwind classNames or custom css classNames via the{" "}
            <code>className</code> prop.
          </p>
        }
        iframe={<IFrame codeId="gtBIE7UCOJWHAt3M69fz" />}
      />

      <DocSection
        heading="Primary Button"
        componentEx={
          <Button
            btnText="click me"
            className="primary"
            onClick={() => alert("Primary button clicked!")}
          />
        }
        description={
          <p>
            This is primary button, which is styled differently than the
            previous simple button. To use the Primary button, just provide a{" "}
            <code>className</code> of <code>primary</code> as shown below. It
            can be customized further using the <code>className</code> prop.
          </p>
        }
        iframe={<IFrame codeId="KB3EKkHy8bvzbR1KDzsy" />}
      />
      <DocSection
        heading="Link Button"
        componentEx={
          <Button
            btnText="click me"
            className="link"
            onClick={() => alert("Link button clicked!")}
          />
        }
        description={
          <p>
            This is a button which resembles a link. This button can be accessed
            by passing it <code>link</code> to the <code>className</code> prop.
          </p>
        }
        iframe={<IFrame codeId="1B994OewV8Pc4Zp6RA5g" />}
      />

      <DocSection
        heading="Icon Button"
        componentEx={
          <div className="example_box_flex">
            <Button btnText="₹" onClick={() => alert("Icon button clicked!")} />
            <Button icon="₹" onClick={() => alert("Icon button clicked!")} />
          </div>
        }
        description={
          <p>
            These are the Icon buttons. It can be used either by giving an icon
            to the <code>btnText</code> or the <code>icon</code> prop. The
            <code>btnText</code> will only take string icons, whereas the{" "}
            <code>icon</code> prop can take JSX component icon as well as a
            string icon value.
          </p>
        }
        iframe={<IFrame codeId="WdIVgaer4MN6XkAS2NrD" />}
      />

      <DocSection
        heading="Button with Icon"
        componentEx={
          <Button
            btnText="click me"
            icon="₹"
            onClick={() => alert("Button with Icon clicked!")}
          />
        }
        description={
          <p>
            The <code>btnText</code> prop and the <code>icon</code> prop both
            can be passed values to get a button with icon and text both like
            shown above.
          </p>
        }
        iframe={<IFrame codeId="aCgF4lwYKbFVvRkSdg3q" />}
      />

      <DocSection
        heading="Floating Action Button"
        componentEx={
          <div style={{ position: "relative" }}>
            <FloatingActionButton
              icon="₹"
              top={0}
              className="fixed"
              onClick={() => alert("Floating action button clicked!")}
            />
          </div>
        }
        description={<p>This is Floating action button.</p>}
        iframe={<IFrame codeId="0gfNhENrEx32OrHhm6XT" />}
      />
      <div className="container">
        <h3>Component for floating action button</h3>
        <IFrame codeId="jUhzg8vYUyrmDrlo6euO" />
      </div>
      <div className="container">
        <h3>CSS for floating action button</h3>
        <IFrame codeId="Qx4czL4yYHBohPkGnSAq" />
      </div>
    </div>
  );
}
