import { Database } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";

const options = {
  URL: import.meta.env.VITE_DATABASE_URL,
  KEY: import.meta.env.VITE_DATABASE_ANON_KEY,
};

const client = createClient<Database>(options.URL, options.KEY);

const supabase = () => client;

export default supabase;
