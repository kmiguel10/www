import React from "react";
import Base from "../components/layouts/base";
import ProfileHeader from "../components/header";
import ContainerLayout from "../components/layouts/container";

const page = () => {
  return (
    <Base>
      <ContainerLayout className="flex flex-col space-y-4">
        <div>About Me</div>
      </ContainerLayout>
    </Base>
  );
};

export default page;
