import Base from "./components/layouts/base";

import ProfileHeader from "./components/pages/header";
import ContainerLayout from "./components/layouts/container";
import Contents from "./components/pages/contents";

export default function Home() {
  return (
    <>
      <Base>
        <ContainerLayout className="flex flex-col space-y-4">
          <ProfileHeader />
          <Contents />
        </ContainerLayout>
      </Base>
    </>
  );
}
