import React from "react";
import ProfileHeader from "@components/ui/header";
import Base from "@components/layouts/base";
import ContainerLayout from "@components/layouts/container";
import ResumeContent from "./components/resume-content";
import Skills from "./components/skills";

const page = () => {
  return (
    <Base subtitle="Resume" pageSlug="/resume">
      <ContainerLayout className="flex flex-col space-y-4">
        <ProfileHeader />
        <Skills />
        <ResumeContent />
      </ContainerLayout>
    </Base>
  );
};

export default page;
