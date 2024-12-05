"use client";

function error({ error, reset }) {
  return (
    <div className="text-center">
      <h2 className="heading-1">{error.message || error.data}</h2>
      <button onClick={reset} className="btn">
        Reset
      </button>
    </div>
  );
}

export default error;
