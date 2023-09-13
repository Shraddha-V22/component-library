import React from "react";

export default function CodeSnippets({
  children,
}: {
  children: React.ReactNode;
}) {
  return <pre>{children}</pre>;
}
