import React from "react";
import ContentDisplay from "../layouts/content-display";
import { Star, FileText } from "lucide-react";
import Button from "../ui/button";

const MySocials = () => {
  return (
    <ContentDisplay
      className="w-full min-[960px]:w-64 col-span-2"
      symbol={<Star />}
      name="Connect"
      description="Follow me on my socials"
      button={
        <Button size="sm" href="/resume" rightIcon={<FileText />}>
          Resume
        </Button>
      }
    >
      <div className="line-clamp-1 text-ellipsis text-sm text-gray-11 p-4">
        <p className="overflow-auto ">
          After taking a year off from work. I am currently looking for new job
          opportunities. You can look at and download my resume.
        </p>
      </div>
    </ContentDisplay>
  );
};

export default MySocials;
