"use client";
import React, { useState } from "react";
export default function Page() {
  const [number, setNumber] = useState(1);

  function buttonClicked(a) {
    setNumber(a);
  }
  return (
    <div>
      <p>Number {number}</p>
      <button onClick={() => buttonClicked(1)}>1</button>
      <button onClick={() => buttonClicked(2)}>2</button>
      <button onClick={() => buttonClicked(3)}>3</button>
      <button onClick={() => buttonClicked(4)}>4</button>
      <button onClick={() => buttonClicked(5)}>5</button>
      <button onClick={() => buttonClicked(6)}>6</button>
      <button onClick={() => buttonClicked(7)}>7</button>
      <button onClick={() => buttonClicked(8)}>8</button>
      <button onClick={() => buttonClicked(9)}>9</button>
      <button onClick={() => buttonClicked(10)}>10</button>
      <button onClick={() => clear(number)}>clear</button>
    </div>
  );
}
