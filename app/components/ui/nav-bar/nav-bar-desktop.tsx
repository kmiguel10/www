import React from "react";

import { NAVBAR_PAGES } from "@/lib/constants/site";
import Button from "@components/ui/button/index";
import clsx from "clsx";
import { SunMoon } from "lucide-react";

export default function NavbarDesktop({ selected }: NavBarProps) {
  // const toggleTheme = () => {
  //   // if (document.body.classList.contains("dark"))
  //   //   document.body.classList.remove("dark");
  //   // else document.body.classList.add("dark");
  // };

  // if (typeof window !== "undefined") {
  //   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("light");
  //     localStorage.theme = "light";
  //     console.log("THEME 1", document.documentElement.classList);
  //   } else {
  //     document.documentElement.classList.add("light");
  //     localStorage.theme = "light";
  //     console.log("THEME 2", document.documentElement.classList);
  //   }

  //   // Whenever the user explicitly chooses light mode
  //   // localStorage.theme = "light";

  //   // // Whenever the user explicitly chooses dark mode
  //   // localStorage.theme = "dark";

  //   // Whenever the user explicitly chooses to respect the OS preference
  //   // localStorage.removeItem("theme");
  //   console.log("THEME", localStorage.theme);
  // }

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
      <div className="ml-2">
        {/* <button
          onClick={toggleTheme}
          className="px-3 py-1 border border-stone-200 rounded-full drop-shadow-sm text-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-lg hover:border-stone-300 transition-colors dark:border-stone-500 dark:hover:border-stone-400"
        >
          <SunMoon />
        </button> */}
      </div>
    </nav>
  );
}
