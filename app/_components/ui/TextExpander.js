"use client";

import { useState } from "react";

function TextExpander({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      {isOpen ? (
        <p className="paragraph">
          {children.split(" ").slice(0, 15).join(" ")}
          <span className="gold">...</span>
          <span onClick={handleOpen} className="gold">
            Show more
          </span>
        </p>
      ) : (
        <p>
          {children}{" "}
          <span onClick={handleOpen} className="gold">
            Show less
          </span>
        </p>
      )}
    </div>
  );
}

export default TextExpander;
