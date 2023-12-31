import React from "react";
import { User } from "lucide-react";
import ContentDisplay from "../layouts/content-display";
import Button from "../ui/button";
ContentDisplay;
import { ScrollText } from "lucide-react";

const AboutMe = () => {
  return (
    <ContentDisplay
      className="col-span-2 w-full min-[560px]:col-span-4"
      symbol={<User />}
      name="About Me"
      description="Introduction"
      button={
        <Button size="sm" href="/resume" rightIcon={<ScrollText />}>
          Resume
        </Button>
      }
    >
      <div className="text-sm text-gray-11 px-4 py-4">
        <p className="overflow-auto">
          I am a full-stack developer with experience in React.js and Vue.js. I
          also have a strong interest in the blockchain technology and web3. I
          was a previous fullstack developer at Deloitte and I took a year off
          to travel in Europe. Now, I am looking for new job opportunities.
        </p>
      </div>
    </ContentDisplay>
  );
};

export default AboutMe;
