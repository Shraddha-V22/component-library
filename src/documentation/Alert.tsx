import { IFrame } from "../components";
import { Alert } from "../libraryComponents";
import DocSection from "./DocSection";

export default function AlertDocs() {
  return (
    <div className="flex_col">
      <div className="container">
        <h1>Alert</h1>
        <p>
          Alert presents a notification or alert to capture the user's
          attention.
        </p>
      </div>

      <div className="container">
        <h2>Component</h2>
        <IFrame codeId="VKnVtZ6o4NNFtPW4fuT7" />
      </div>
      <div className="container">
        <h2>CSS</h2>
        <IFrame codeId="uxZnBoQu3xdpPnN0Xxsg" />
      </div>
      <DocSection
        heading="Normal Alert component"
        componentEx={<Alert text="I am a simple alert component!" />}
        description={
          <p>
            This is a normal alert component with simple style and which does
            not suggest much as to whether it is a success, warning, info, etc.
            It can be customized further by giving it <code>className</code>{" "}
            prop, which can be given tailwind classes or your custom css
            classes.
          </p>
        }
        iframe={<IFrame codeId="IBf89VttafHmOcnPBHUx" />}
      />
      <DocSection
        heading="Alert components with different types"
        componentEx={
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Alert text="This is a success!" type="success" />
            <Alert text="Warning: this is a warning" type="warning" />
            <Alert text="This is info alert." type="info" />
            <Alert text="This is error type alert." type="error" />
          </div>
        }
        description={
          <p>
            Alert component can be passed the type of the alert message that is
            being shown to the user. There are four types of alert messages that
            can be passed to the type prop - <code>success</code>,{" "}
            <code>warning</code>, <code>info</code>, and <code>error</code>.
          </p>
        }
        iframe={<IFrame codeId="ng1JI8d2SYnEvGJK1asZ" />}
      />
    </div>
  );
}
