"use server";

import { supabase } from "./_lib/supabase";

export async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Error logging in");

  return data;
}
