"use client";

import React from "react";
import { Fragment } from "react";
import NavbarDesktop from "./nav-bar-desktop";
import NavbarMobile from "./nav-bar-mobile";

export default function Navbar({ selected }: NavBarProps) {
  return (
    <Fragment>
      <NavbarDesktop selected={selected} />
      <NavbarMobile selected={selected} />
    </Fragment>
  );
}
