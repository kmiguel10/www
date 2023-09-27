import React, { ReactNode } from "react";
import NavBar from "../ui/nav-bar";

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
