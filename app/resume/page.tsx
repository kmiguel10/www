import React from "react";
import ProfileHeader from "../components/pages/header";
import Base from "../components/layouts/base";
import ContainerLayout from "../components/layouts/container";
import Image from "next/image";
import profile from "../../public/profile.jpeg";
import Contents from "../components/pages/contents";
import ResumeContent from "../components/pages/resume/resume-content";
import Skills from "../components/pages/resume/skills";

const page = () => {
  return (
    <Base>
      <ContainerLayout className="flex flex-col space-y-4">
        <ProfileHeader />
        <Skills />
        <ResumeContent />
        {/** Accordion */}
      </ContainerLayout>
    </Base>
  );
};

export default page;
