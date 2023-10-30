import React, { ReactNode } from "react";
import NavBar from "@components/ui/nav-bar/nav-bar";

export default function Base({ pageSlug, children }: BaseLayoutProps) {
  return (
    <>
      <NavBar selected={pageSlug} />
      <main className="relative flex grow flex-col">{children}</main>
    </>
  );
}
