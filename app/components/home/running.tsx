import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import RunningBarChart from "./running-bar-chart";

export const dynamic = "force-dynamic";

export default async function Running() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: runs } = await supabase.from("running").select();

  return (
    <div>
      <RunningBarChart />
    </div>
  );
}
