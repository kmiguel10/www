import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Base from "@components/layouts/base";
import ProfileHeader from "@components/ui/header";
import ContainerLayout from "@components/layouts/container";
import FitnessDashboard from "./components/fitness-dashboard";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Fitness",
};

export interface FitnessActivity {
  id: string;
  source: "strava" | "garmin";
  name: string | null;
  sport_type: string | null;
  start_time: string;
  duration_seconds: number | null;
  distance_meters: number | null;
  calories: number | null;
  avg_heart_rate: number | null;
}

export default async function FitnessPage() {
  // Uses the same Supabase project as the rest of the www site.
  // Ensure your Supabase project has the `activities` table from strava-garmin-mcp.
  const supabase = createServerComponentClient<any>({ cookies });

  const { data } = await supabase
    .from("activities")
    .select(
      "id, source, name, sport_type, start_time, duration_seconds, distance_meters, calories, avg_heart_rate"
    )
    .order("start_time", { ascending: false });

  const activities: FitnessActivity[] = data ?? [];

  return (
    <Base pageSlug="/fitness">
      <ContainerLayout className="flex flex-col space-y-4">
        <ProfileHeader />
        <FitnessDashboard activities={activities} />
      </ContainerLayout>
    </Base>
  );
}
