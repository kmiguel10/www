import React from "react";
import Base from "@components/layouts/base";
import ContainerLayout from "@components/layouts/container";
import InProgressImage from "../../public/aboutme-option12.webp";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Button from "@components/ui/button/index";

export const metadata = {
  title: "About Me",
};

const page = () => {
  return (
    <Base pageSlug="/about">
      <ContainerLayout className="flex flex-col space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-12 md:text-4xl">
          About Me
        </h1>
        <div className="text-gray-11">Work in progress.</div>
        <Image
          className="rounded-2xl border border-gray-6"
          src={InProgressImage}
          alt="image"
        />
        <Button
          variant="secondary"
          intent="primary"
          href="/"
          leftIcon={<ChevronLeft />}
        >
          Return home
        </Button>
      </ContainerLayout>
    </Base>
  );
};

export default page;
