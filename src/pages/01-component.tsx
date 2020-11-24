import React from "react";

// make button type safe
export interface ButtonProps {}

const Button = ({ children, color, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
  }
  return <Button color="primary" onClick={handleClick}>Hello</Button>;
}
