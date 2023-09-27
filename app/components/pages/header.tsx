import React from "react";
import ProfileAvatar from "./profile-avatar";
import Button from "../ui/button";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-6 bg-gray-2 p-3 md:flex-row md:justify-between md:rounded-2xl md:p-6">
      <div className="flex w-full items-center">
        {/* Avatara (desktop) */}
        <ProfileAvatar className="mr-4 hidden md:block" size={56} />
        {/* Avatara (mobile) TODO */}
        <div>
          <div className="text-base font-semibold md:text-2xl">
            {" "}
            Kent Miguel
          </div>
          <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
            I am a fullstack developer
          </span>
        </div>
      </div>
      {/* Links (Desktop) */}
      <div className="hidden space-x- md:flex">
        <Button>Twitter</Button>
        <Button>Github</Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
