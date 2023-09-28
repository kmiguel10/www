import React from "react";
import ContentDisplayMinimal from "../layouts/content-display-minimal";
import { ExternalLink, Hammer } from "lucide-react";
import Button from "../ui/button";

const SpeedRun = () => {
  return (
    <ContentDisplayMinimal
      className="col-span-2 w-full min-[960px]:col-span-3"
      name="Buidl Guidl"
      description="Decentralized Applications I built"
      symbol={<Hammer />}
      button={
        <Button
          size="sm"
          rightIcon={<ExternalLink />}
          href="https://app.buidlguidl.com/builders/0x4c2B577D992d16973b57b1757e996dC0d0a07F74"
          newTab
        >
          View
        </Button>
      }
    />
  );
};

export default SpeedRun;
