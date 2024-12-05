import { getReservations } from "../_lib/data-service";

async function page() {
  const reservations = await getReservations();

  return (
    <div className="text-center">
      <h3 className="heading-3 ">Your Reservations</h3>

      <ul>
        {reservations?.map((reservation) => (
          <li key={reservation.id}>{reservation.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default page;
