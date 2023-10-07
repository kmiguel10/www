import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import RunningBarChart from "./running-bar-chart";
import { Footprints } from "lucide-react";
import ContentDisplay from "../layouts/content-display";

export const dynamic = "force-dynamic";

export default async function Running() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase
    .from("running_monthly")
    .select("year, month,total_distance")
    .order("year", { ascending: true })
    .order("month");

  const runData =
    data?.map((run) => ({
      month: String(run.month),
      distance: run.total_distance,
    })) ?? [];

  return (
    <ContentDisplay
      className="col-span-2 w-full min-[560px]:col-span-4"
      name="Running"
      description="I run a lot"
      symbol={<Footprints />}
    >
      <RunningBarChart runMonthData={runData} />
    </ContentDisplay>
  );
}
