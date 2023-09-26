import React from "react";
import ProfileHeader from "../components/header";
import Base from "../components/layouts/base";
import ContainerLayout from "../components/layouts/container";

const page = () => {
  return (
    <Base>
      <ContainerLayout className="flex flex-col space-y-4">
        <div>Resume</div>
      </ContainerLayout>
    </Base>
  );
};

export default page;
