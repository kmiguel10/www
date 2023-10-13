import React from "react";
import Base from "@components/layouts/base";
import ProfileHeader from "@components/ui/header";
import ContainerLayout from "@components/layouts/container";
import InProgressImage from "../../public/aboutme-option3.webp";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Button from "@components/ui/button/index";
import Contents from "./components/contents";

export const metadata = {
  title: "Projects",
};

export default function AboutMe() {
  return (
    <Base pageSlug="/projects">
      <ContainerLayout className="flex flex-col space-y-4">
        <ProfileHeader />
        <Contents />
      </ContainerLayout>
    </Base>
  );
}
