import React from "react";
import Base from "@components/layouts/base";
import ProfileHeader from "@components/ui/header";
import ContainerLayout from "@components/layouts/container";
import InProgressImage from "../../public/aboutme-option3.webp";
import Image from "next/image";

export default function AboutMe() {
  return (
    <Base subtitle="Projects" pageSlug="/projects">
      <ContainerLayout className="flex flex-col space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-12 md:text-4xl">
          Projects
        </h1>
        <div className="text-gray-11">Work in progress.</div>
        <Image
          className="rounded-2xl border border-gray-6"
          src={InProgressImage}
          alt="image"
        />
      </ContainerLayout>
    </Base>
  );
}
