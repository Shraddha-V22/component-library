export default function DocSection({
  heading,
  componentEx,
  description,
  iframe,
}: {
  heading: string;
  componentEx: JSX.Element;
  description: JSX.Element;
  iframe: JSX.Element;
}) {
  return (
    <div className="docs_section">
      <h2>{heading}</h2>
      <div className="example_box">{componentEx}</div>
      {description}
      {iframe}
    </div>
  );
}
