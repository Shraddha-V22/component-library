import { IFrame } from "../components";
import { Heading } from "../libraryComponents";
import DocSection from "./DocSection";

export default function HeadingsDocs() {
  return (
    <div className="flex_col">
      <div>
        <h1>Heading</h1>
        <p>Styles for Heading component.</p>
      </div>
      <DocSection
        heading="Headings of different variants"
        componentEx={
          <div>
            <Heading variant="h1">hello</Heading>
            <Heading variant="h2">hello</Heading>
            <Heading variant="h3">hello</Heading>
            <Heading variant="h4">hello</Heading>
            <Heading variant="h5">hello</Heading>
            <Heading variant="h6">hello</Heading>
          </div>
        }
        description={
          <p>
            Heading component can be used to get heading style of different
            levels. The <code>variant</code> prop can be used to get different
            levels of heading and it takes values from <code>h1</code> to{" "}
            <code>h6</code>.
          </p>
        }
        iframe={<IFrame codeId="pkKWxPRhEhPWbnWDsUQ3" />}
      />

      <DocSection
        heading="Customizing heading style"
        componentEx={
          <Heading className="font-extrabold capitalize" variant="h1">
            Customized style using classnames
          </Heading>
        }
        description={
          <p>
            The <code>className</code> prop can be used to further customize the
            Heading component. The <code>className</code> prop can be passed
            either tailwind classes or custom css classes for styling like shown
            above.
          </p>
        }
        iframe={<IFrame codeId="HLRR6tv4sGe8vVZN0a1G" />}
      />
    </div>
  );
}
