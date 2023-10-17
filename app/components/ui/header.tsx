"use client";

import React from "react";
import ProfileAvatar from "./profile-avatar";
import Button from "./button";
import { Github, Download, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

const ProfileHeader = () => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-6 bg-gray-2 p-3 md:flex-row md:justify-between md:rounded-2xl md:p-6">
      <div className="flex w-full items-center">
        {/* Avatara (desktop) */}
        <ProfileAvatar className="mr-4 hidden md:block" size={56} />
        {/* Avatara (mobile) TODO */}
        <ProfileAvatar className="mr-2 md:hidden" size={40} />
        <div>
          <div className="text-base font-semibold md:text-2xl">
            {" "}
            Kent Miguel
          </div>
          <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
            Full-stack Developer , web3 , blockchain
          </span>
        </div>
      </div>
      {/* Links (Desktop) */}
      <div className="hidden space-x-2 md:flex">
        <Button
          intent="primary"
          href="https://www.linkedin.com/in/kent-miguel/"
          leftIcon={<Linkedin />}
          newTab
        >
          LinkedIn
        </Button>
        <Button
          href="https://github.com/kmiguel10"
          leftIcon={<Github />}
          intent="success"
          variant="primary"
          newTab
        >
          GitHub
        </Button>
        {currentPath === "/resume" && (
          <Button
            size="md"
            className="w-full"
            leftIcon={<Download />}
            intent="success"
            variant="outline"
            newTab
          >
            <a href="/kentmiguel.pdf" download>
              Resume
            </a>
          </Button>
        )}
      </div>
      {/* Links (Mobile) */}
      <div className="mt-4 flex w-full space-x-2 md:hidden">
        <Button
          size="md"
          intent="primary"
          className="w-full"
          href="https://www.linkedin.com/in/kent-miguel/"
          leftIcon={<Linkedin />}
          newTab
        >
          LinkedIn
        </Button>
        <Button
          size="md"
          className="w-full"
          intent="success"
          variant="primary"
          href="https://github.com/kmiguel10"
          leftIcon={<Github />}
          newTab
        >
          GitHub
        </Button>
        {currentPath === "/resume" && (
          <Button
            size="md"
            className="w-full"
            leftIcon={<Download />}
            intent="success"
            variant="outline"
            newTab
          >
            <a href="/kentmiguel.pdf" download>
              Resume
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
