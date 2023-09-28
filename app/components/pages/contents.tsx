import React from "react";
import AboutMe from "./about-me";
import MySocials from "./my-socials";
import CodeFourArena from "./code-four-arena";
import SpeedRun from "./speedrun";

const Contents = () => {
  return (
    <div className="grid grid-cols-2 gap-4 min-[560px]:grid-cols-4 min-[960px]:grid-cols-6">
      <AboutMe />
      <MySocials />
      <CodeFourArena />
      <SpeedRun />
    </div>
  );
};

export default Contents;
