"use client";

import React from "react";

import { NAVBAR_PAGES } from "@/lib/constants/site";
import Tooltip from "@components/ui/tooltip";
import IconButton from "@components/ui/icon-button";
import clsx from "clsx";
import { SunMoon } from "lucide-react";

export default function NavbarMobile({ selected }: NavBarProps) {
  // const toggleTheme = () => {
  //   if (document.body.classList.contains("dark"))
  //     document.body.classList.remove("dark");
  //   else document.body.classList.add("dark");
  // };
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
      {/* <button
        onClick={toggleTheme}
        className="px-3 py-1 border border-stone-200 rounded-full drop-shadow-sm text-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-lg hover:border-stone-300 transition-colors dark:border-stone-500 dark:hover:border-stone-400"
      >
        <SunMoon />
      </button> */}
    </nav>
  );
}
