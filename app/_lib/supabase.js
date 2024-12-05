import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://fndaviiwvhrqdxamgoem.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZGF2aWl3dmhycWR4YW1nb2VtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjY2NDM5NiwiZXhwIjoyMDQ4MjQwMzk2fQ.7CroDEMvhC6wUGN1JoduzHRNKP7187Ik4QCuK_y6KZE"
);
