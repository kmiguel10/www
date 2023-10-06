import Base from "./components/layouts/base";

import ProfileHeader from "./components/ui/header";
import ContainerLayout from "./components/layouts/container";
import Contents from "./components/home/contents";
import Running from "./components/home/running";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: runs } = await supabase.from("running").select();

  return (
    <>
      <Base>
        <ContainerLayout className="flex flex-col space-y-4">
          <ProfileHeader />
          <Contents />
          <Running />
        </ContainerLayout>
      </Base>
    </>
  );
}
