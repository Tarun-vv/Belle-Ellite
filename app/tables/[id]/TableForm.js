"use client";

import { addReservation } from "@/app/_lib/actions";
import { useFormStatus } from "react-dom";

function TableForm({ price }) {
  return (
    <form className="flex" action={addReservation}>
      <div className="form__group">
        <label className="form__label " htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          className="form__input"
          placeholder="Mike"
          id="firstName"
          name="firstName"
        />
      </div>

      <div className="form__group">
        <label className="form__label " htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          className="form__input"
          placeholder="Johnson"
          id="lastName"
          name="lastName"
        />
      </div>

      <div className="form__group">
        <label className="form__label " htmlFor="email">
          Email
        </label>
        <input
          type="text"
          className="form__input"
          placeholder="mike@email.com"
          id="email"
          name="email"
        />
      </div>
      <div className="form__group">
        <label className="form__label " htmlFor="message">
          Any special requests?
        </label>
        <input
          type="text"
          className="form__input"
          placeholder="Please leave a message"
          id="message"
          name="request"
        />
      </div>
      <Button price={price} />
    </form>
  );
}

function Button({ price }) {
  const { pending } = useFormStatus();

  return (
    <button href="#" className="btn" disabled={pending}>
      {pending ? "Booking" : `Book Now for ${price}`}
    </button>
  );
}

export default TableForm;
