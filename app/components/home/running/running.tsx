import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import RunningBarChart from "./running-bar-chart";
import { Footprints } from "lucide-react";
import ContentDisplay from "../../layouts/content-display";
import * as Tabs from "@radix-ui/react-tabs";
import RunningDetails from "./running-details";

export const dynamic = "force-dynamic";

//**  Main component */

const Running = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  //Fetch Monthly
  const { data } = await supabase
    .from("running_monthly")
    .select("year, month,total_distance")
    .order("year", { ascending: true })
    .order("month");

  const runData: MileageLog[] =
    data?.map((run) => ({
      date: String(run.month),
      value: run.total_distance,
    })) ?? [];

  //Fetch daily logs
  const { data: dailyData } = await supabase
    .from("running")
    .select("date, distance");

  const dailyRunData: MileageLog[] =
    dailyData?.map((run) => ({
      date: run.date,
      value: run.distance,
    })) ?? [];

  return (
    <ContentDisplay
      className="col-span-2 w-full min-[560px]:col-span-4"
      name="Running"
      description="I run a lot"
      symbol={<Footprints />}
    >
      <RunningDetails runMonthlyData={runData} dailyData={dailyRunData} />
    </ContentDisplay>
  );
};

export default Running;
