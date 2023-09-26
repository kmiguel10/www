import React, { ReactNode } from "react";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const ContainerLayout = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        clsx(
          "mx-auto w-full max-w-[60rem] grow p-4 md:px-20 md:py-16",
          className
        )
      )}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
