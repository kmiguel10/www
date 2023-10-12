import Base from "./components/layouts/base";

import ProfileHeader from "@components/ui/header";
import ContainerLayout from "@components/layouts/container";
import Contents from "@components/home/contents";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <Base pageSlug="/">
        <ContainerLayout className="flex flex-col space-y-4">
          <ProfileHeader />
          <Contents />
        </ContainerLayout>
      </Base>
    </>
  );
}
