import { IFrame } from "../components";
import { Text } from "../libraryComponents";
import DocSection from "./DocSection";

export default function TextDocs() {
  return (
    <div className="flex_col">
      <div>
        <h1>Text</h1>
      </div>

      <DocSection
        heading="Text component of varient p"
        componentEx={
          <Text varient="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            atque aspernatur porro?
          </Text>
        }
        description={
          <p>
            The <code>varient</code> <code>p</code> gives simple paragraph
            styling to the text.
          </p>
        }
        iframe={<IFrame codeId="VCUoPwefUw0MHh3Hz9tQ" />}
      />

      <DocSection
        heading="Text component of varient small"
        componentEx={
          <Text varient="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia
            unde fugit!
          </Text>
        }
        description={
          <p>
            The <code>varient</code> <code>small</code> can be used to get the
            small paragraph styling.
          </p>
        }
        iframe={<IFrame codeId="1h8vB5E5gO5R1EYkptIp" />}
      />

      <DocSection
        heading="Blockquote text style"
        componentEx={
          <div>
            <Text varient="p">Here is a quote from WWF's website:</Text>
            <Text
              varient="blockquote"
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
            The <code>varient</code> <code>blockquote</code> gives blockquote
            styling to the text component. blockquote quotes a section from
            another source. So Text component here takes <code>cite</code>{" "}
            property as well, which takes the source url.
          </p>
        }
        iframe={<IFrame codeId="xP4YWC25qs98VF3dz6A5" />}
      />

      <Text varient="q">Hello</Text>

      <Text varient="blockquote">Hello</Text>
    </div>
  );
}
