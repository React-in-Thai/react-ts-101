import React from "react";

type Props = {
  header: React.ReactNode;
  sidebar: React.ReactElement;
  footer: string;
};

export function Example({
  header,
  sidebar,
  footer,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div>
      <header>{header}</header>
      <div>{sidebar}</div>
      <div>{children}</div>
      <footer>{footer}</footer>
    </div>
  );
}

function App() {
  return (
    <Example />
  )
}
