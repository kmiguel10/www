import React from "react";
import ProfileHeader from "../components/pages/header";
import Base from "../components/layouts/base";
import ContainerLayout from "../components/layouts/container";
import Image from "next/image";
import profile from "../../public/profile.jpeg";
import Contents from "../components/pages/contents";

const page = () => {
  return (
    <Base>
      <ContainerLayout className="flex flex-col space-y-4">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              className="max-w-sm rounded-lg shadow-2xl"
              src={profile}
              alt="Kent Miguel"
            />
            {/* <img
              src="/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            /> */}
            <div>
              <h1 className="text-5xl font-bold">Kent Miguel</h1>
              <p className="py-6">
                I am a full stack developer currently looking for new
                opportunities !
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </Base>
  );
};

export default page;
