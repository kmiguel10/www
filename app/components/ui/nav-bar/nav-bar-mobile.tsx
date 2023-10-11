"use client";

import React from "react";

import { NAVBAR_PAGES } from "@/lib/constants/site";
import Tooltip from "@components/ui/tooltip";
import IconButton from "@components/ui/icon-button";
import clsx from "clsx";

export default function NavbarMobile({ selected }: NavBarProps) {
  return (
    <nav className="pointer-events-auto sticky top-0 z-popover flex h-12 items-center border-b border-gray-6 bg-white px-4 dark:bg-black md:hidden">
      {/* <Logo /> */}
      {NAVBAR_PAGES.map((page) => {
        const pageSelected = selected === page.slug;

        return (
          <Tooltip key={page.slug} content={page.name}>
            <IconButton
              className={clsx(
                "ml-2",
                pageSelected ? "cursor-default bg-gray-4" : ""
              )}
              variant="ghost"
              href={page.slug}
              disabled={pageSelected}
            >
              {page.icon}
            </IconButton>
          </Tooltip>
        );
      })}
      <div className="flex-grow" />
    </nav>
  );
}
