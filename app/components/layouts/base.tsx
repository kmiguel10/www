import React, { ReactNode } from "react";
import SeoBase from "@components/layouts/seo-base";
import NavBar from "@components/ui/nav-bar/nav-bar";

export default function Base({
  title,
  subtitle,
  pageSlug,
  children,
}: BaseLayoutProps) {
  return (
    <>
      <SeoBase title={title} subtitle={subtitle} />
      <NavBar selected={pageSlug} />
      <main className="relative flex grow flex-col">{children}</main>
    </>
  );
}
