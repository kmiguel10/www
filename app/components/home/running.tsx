import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Running() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: runs } = await supabase.from("running").select();

  return <div>RUNS</div>;
}
