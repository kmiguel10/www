import React from "react";
import ContentDisplay from "../layouts/content-display";
import { Hand, Mail } from "lucide-react";
import Button from "../ui/button";

const MySocials = () => {
  return (
    <ContentDisplay
      className="w-full min-[960px]:w-64 col-span-2"
      symbol={<Hand />}
      name="Get in touch"
      description=""
      button={
        <Button
          size="sm"
          href="mailto:kentmiguel10@gmail.com"
          rightIcon={<Mail />}
        >
          Email
        </Button>
      }
    >
      <div className="line-clamp-1 text-ellipsis text-sm text-gray-11 p-4">
        <p className="overflow-auto ">
          I am actively looking for job opportunities. My inbox is open and feel
          free to ask me anything!
        </p>
      </div>
    </ContentDisplay>
  );
};

export default MySocials;
