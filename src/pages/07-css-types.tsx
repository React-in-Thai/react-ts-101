import React, { CSSProperties } from "react";

export function Row({
  style,
  children,
}: React.PropsWithChildren<{ style: CSSProperties }>) {
  return <div style={style}>{children}</div>;
}

function App() {
  return <Row style={{ display: "flex", justifyContent: "center" }} />;
}
