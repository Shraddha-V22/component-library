import "./Iframe.css";

export default function IFrame({ codeId }: { codeId: string }) {
  return (
    <iframe
      src={`https://carbon.now.sh/embed/${codeId}`}
      className="iframe"
      sandbox="allow-scripts allow-same-origin"
    ></iframe>
  );
}
