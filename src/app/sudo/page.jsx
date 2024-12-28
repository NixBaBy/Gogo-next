"use client";
import { useState } from "react";
import page from "./page.module.css";

export default function Page() {
  const [num, setNum] = useState("");

  const buttonClicked = (a) => {
    setNum(a);
  };

  return (
    <div className={page.nums}>
      <div className={page.view}>{num}</div>
      <button onClick={() => buttonClicked("1")}>1</button>
      <button onClick={() => buttonClicked(2)}>2</button>
      <button onClick={() => buttonClicked(3)}>3</button>
      <button onClick={() => buttonClicked(4)}>4</button>
      <button onClick={() => buttonClicked(5)}>5</button>
      <button onClick={() => buttonClicked(6)}>6</button>
      <button onClick={() => buttonClicked(7)}>7</button>
      <button onClick={() => buttonClicked(8)}>8</button>
    </div>
  );
}
