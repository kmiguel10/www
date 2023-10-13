import React from "react";
import ContentDisplayMinimal from "../layouts/content-display-minimal";
import { ExternalLink, Hammer } from "lucide-react";
import Button from "../ui/button";

const SpeedRun = () => {
  return (
    <ContentDisplayMinimal
      className="col-span-2 w-full min-[960px]:col-span-3"
      name="Projects"
      description="Apps I've built"
      symbol={<Hammer />}
      button={
        <Button size="sm" rightIcon={<ExternalLink />} href="/projects">
          View
        </Button>
      }
    />
  );
};

export default SpeedRun;
