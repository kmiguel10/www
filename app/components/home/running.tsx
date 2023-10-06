import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Running() {
  const supabase = createServerComponentClient({ cookies });
  const { data: runs } = await supabase.from("running").select();

  return <div>RUNS</div>;
}
