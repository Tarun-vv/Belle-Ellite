"use server";

import toast from "react-hot-toast";
import { supabase } from "./supabase";

export async function addReservation(formData) {
  // constructing data
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const request = formData.get("request");

  if (!firstName || !lastName || !email || !request)
    throw new Error("Error while filling ou fields, please try again!");

  const newReservation = { firstName, lastName, email, request };
  console.log(newReservation);

  // passing data to supabase
  const { data, error } = await supabase
    .from("reservations")
    .insert([newReservation])
    .select();

  if (error) {
    throw new Error(error.message);
    toast.error("Reservation could not be added");
  }

  if (!error) {
    () => toast.success("Reservation was added");
  }
}
