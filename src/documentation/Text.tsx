import { IFrame } from "../components";
import { Text } from "../libraryComponents";
import DocSection from "./DocSection";

export default function TextDocs() {
  return (
    <div className="flex_col">
      <div className="container">
        <h1>Text</h1>
        <p>Text styles of different variants.</p>
      </div>

      <div className="container">
        <h2>Component</h2>
        <IFrame codeId="Ys7M6x5M0B3B6Pifs7lX" />
      </div>

      <div className="container">
        <h2>CSS</h2>
        <IFrame codeId="lUp2enedIFnJkYlo9fjm" />
      </div>

      <DocSection
        heading="Text component of variant p"
        componentEx={
          <Text variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            atque aspernatur porro?
          </Text>
        }
        description={
          <p>
            The <code>variant</code> <code>p</code> gives simple paragraph
            styling to the text.
          </p>
        }
        iframe={<IFrame codeId="cGnZZFXVslfdtR9THgQB" />}
      />

      <DocSection
        heading="Text component of variant small"
        componentEx={
          <Text variant="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia
            unde fugit!
          </Text>
        }
        description={
          <p>
            The <code>variant</code> <code>small</code> can be used to get the
            small paragraph styling.
          </p>
        }
        iframe={<IFrame codeId="otI2p9f4PsCoZyYvAnyz" />}
      />

      <DocSection
        heading="Blockquote text style"
        componentEx={
          <div>
            <Text variant="p">Here is a quote from WWF's website:</Text>
            <Text
              variant="blockquote"
              cite="http://www.worldwildlife.org/who/index.html"
            >
              For 50 years, WWF has been protecting the future of nature. The
              world's leading conservation organization, WWF works in 100
              countries and is supported by 1.2 million members in the United
              States and close to 5 million globally.
            </Text>
          </div>
        }
        description={
          <p>
            The <code>variant</code> <code>blockquote</code> gives blockquote
            styling to the text component. blockquote quotes a section from
            another source. So Text component here takes <code>cite</code>{" "}
            property as well, which takes the source url.
          </p>
        }
        iframe={<IFrame codeId="ROje1bq5NcEtcOIUopUy" />}
      />

      <DocSection
        heading="Inline quote style"
        componentEx={
          <Text variant="p">
            WWF's goal is to:{" "}
            <Text variant="q">
              Build a future where people live in harmony with nature.
            </Text>{" "}
            We hope they succeed.
          </Text>
        }
        description={
          <p>
            The <code>variant</code> <code>q</code> gives inline quote style to
            the text component.{" "}
          </p>
        }
        iframe={<IFrame codeId="TQe8iV5Qh4bh996AErTW" />}
      />

      <DocSection
        heading="Custom style to Text component"
        componentEx={
          <Text className="text-lg italic" variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            atque aspernatur porro?
          </Text>
        }
        description={
          <p>
            Custom style can be given to the text component by providing
            tailwind classes or custom css classes.
          </p>
        }
        iframe={<IFrame codeId="GpOS8UsfjxUYjUq4EMUb" />}
      />
    </div>
  );
}
