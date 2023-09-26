import Base from "./components/layouts/base";

import ProfileHeader from "./components/header";
import ContainerLayout from "./components/layouts/container";

export default function Home() {
  return (
    <>
      <Base>
        <ContainerLayout className="flex flex-col space-y-4">
          <ProfileHeader />
          <div>Summaries</div>
        </ContainerLayout>
      </Base>
    </>
  );
}
