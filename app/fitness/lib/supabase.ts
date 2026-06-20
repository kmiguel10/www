import { createClient } from '@supabase/supabase-js'

// Separate Supabase client pointing to the strava-garmin-mcp database.
// Env vars must be set in Vercel: FITNESS_SUPABASE_URL and FITNESS_SUPABASE_SERVICE_ROLE_KEY
export const fitnessSupabase = createClient(
  process.env.FITNESS_SUPABASE_URL!,
  process.env.FITNESS_SUPABASE_SERVICE_ROLE_KEY!
)
