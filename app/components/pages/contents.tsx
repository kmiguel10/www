import React from "react";
import AboutMe from "./about-me";

const Contents = () => {
  return (
    <div className="grid grid-cols-2 gap-4 min-[560px]:grid-cols-4 min-[960px]:grid-cols-6">
      <AboutMe />
    </div>
  );
};

export default Contents;
