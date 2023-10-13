import Project from "./project";
import React from "react";

export default function Contents() {
  return (
    <div className="grid grid-cols-2 gap-4 min-[560px]:grid-cols-4 min-[960px]:grid-cols-6">
      <Project />
    </div>
  );
}
