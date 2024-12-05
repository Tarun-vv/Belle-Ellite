import { supabase } from "./supabase";

export async function getTables() {
  const { data, error } = await supabase.from("tables").select("*");

  if (error) throw new Error("Tables could not be loaded");

  return data;
}

export async function getTable(id) {
  const { data, error } = await supabase
    .from("tables")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Table could not be loaded");

  return data;
}

// export async function addReservation(newReservation) {
//   const { data, error } = await supabase
//     .from("reservations")
//     .insert([newReservation])
//     .select();

//   return data;
// }

export async function getReservations() {
  const { data, error } = await supabase.from("reservations").select("*");

  if (error) throw new Error("Cannot read reservations");

  return data;
}
