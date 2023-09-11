import { IFrame } from "../components";
import { Image } from "../libraryComponents";
import DocSection from "./DocSection";

export default function ImageDocs() {
  return (
    <div className="flex_col">
      <div>
        <h1>Image</h1>
        <p>Responsive and round Image component.</p>
      </div>

      <DocSection
        heading="Responsive Image"
        componentEx={
          <div style={{ width: "200px" }}>
            <Image
              src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="scenery"
            />
          </div>
        }
        description={
          <p>
            This is a Responsive Image component. It will take full width of the
            parent element. Like built-in <code>img</code> tag, it takes{" "}
            <code>src</code> and <code>alt</code> properties.
          </p>
        }
        iframe={<IFrame codeId="hK0c00SLgkSyKHu9gn6e" />}
      />

      <DocSection
        heading="Round Images"
        componentEx={
          <div style={{ width: "200px" }}>
            <Image
              src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="scenery"
              rounded
            />
          </div>
        }
        description={
          <p>
            This is the round image. This style can be applied using the{" "}
            <code>rounded</code> property to the Image component as shown above.{" "}
          </p>
        }
        iframe={<IFrame codeId="XOAIkMiUfpqe4wlxrWYD" />}
      />

      <DocSection
        heading="Custom Style"
        componentEx={
          <div style={{ width: "200px" }}>
            <Image
              src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="scenery"
              className="border-2"
            />
          </div>
        }
        description={
          <p>
            The Image component can be given custom styling by either giving
            tailwind classes or custom css classes as shown above.
          </p>
        }
        iframe={<IFrame codeId="KaxLcLJiUHpXnsqS3HsR" />}
      />
    </div>
  );
}
