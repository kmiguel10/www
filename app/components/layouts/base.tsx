import React, { ReactNode } from "react";
import Container from "../nav-bar";
import NavBar from "../nav-bar";

interface Props {
  children: ReactNode;
}

const Base = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main className="relative flex grow flex-col">{children}</main>
    </>
  );
};

export default Base;
