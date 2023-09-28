import React from "react";
import ContentDisplayMinimal from "../layouts/content-display-minimal";
import { ExternalLink, FileLock2 } from "lucide-react";
import Button from "../ui/button";

const CodeFourArena = () => {
  return (
    <ContentDisplayMinimal
      className="col-span-2 w-full min-[960px]:col-span-3"
      name="Code4Arena"
      description="I join security audit contests"
      symbol={<FileLock2 />}
      button={
        <Button size="sm" rightIcon={<ExternalLink />} href="" newTab>
          View
        </Button>
      }
    />
  );
};

export default CodeFourArena;
