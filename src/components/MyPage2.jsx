import React from "react";
import { useState } from "react";

const MyPage2 = ({ setColor, color }) => {
  const [change, setChange] = useState(true);

  function handleClick() {
    setChange(!change);
    setColor(!color);
  }

  return (
    <div>
      <div>
        <h1>{change ? "Hello World" : "Namaste World"}</h1>
      </div>

      <button
        className={`${
          change ? " bg-black text-white" : "bg-white text-black"
        } font-bold border-2 w-28 p-4`}
        onClick={handleClick}
      >
        hello
      </button>
    </div>
  );
};

export default MyPage2;
