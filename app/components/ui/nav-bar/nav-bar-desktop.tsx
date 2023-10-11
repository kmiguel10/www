import React from "react";

import { NAVBAR_PAGES } from "@/lib/constants/site";
import Button from "@components/ui/button/index";
import clsx from "clsx";

export default function NavbarDesktop({ selected }: NavBarProps) {
  return (
    <nav className="pointer-events-auto sticky top-0 z-popover hidden h-12 items-center border-b border-gray-6 bg-white px-4 dark:bg-black md:flex">
      {/* <Logo />  Can insert picure here or KM logo*/}
      {NAVBAR_PAGES.map((page) => {
        const pageSelected = selected === page.slug;

        return (
          <Button
            key={page.slug}
            className={clsx(
              "ml-2",
              pageSelected ? "cursor-default bg-gray-4" : ""
            )}
            variant="ghost"
            href={page.slug}
            disabled={pageSelected}
          >
            {page.name}
          </Button>
        );
      })}
      <div className="flex-grow" />
    </nav>
  );
}
