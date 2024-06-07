import { Database } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";

export const options = {
  URL: import.meta.env.VITE_DATABASE_URL,
  KEY: import.meta.env.VITE_DATABASE_ANON_KEY,
};

export default function (url: string, key: string) {
  const database = createClient<Database>(url, key);
  return database;
}
