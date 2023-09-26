import React from "react";
import Image from "next/image";
import profile from "../../public/profile.jpeg";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/** Props */
interface Props {
  className?: string;
  size?: number;
}

const ProfileAvatar = ({ className, size = 40 }: Props) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded">
        <Image
          className={clsx(
            twMerge("my-0 rounded-full border border-gray-6", className)
          )}
          src={profile}
          width={size}
          height={size}
          alt="Kent Miguel"
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
