"use client";
import { useState } from "react";

export function Button() {
  const [count, setCount] = useState(0);
  const currentTime = Date.now();

  return (
    <div>
      {currentTime}
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}>
        Click me! ({count})
      </button>
    </div>
  );
}
