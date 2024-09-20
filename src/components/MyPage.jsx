import React from "react";
import { useState } from "react";

const MyPage = () => {
  const [design, setDesign] = useState(false);
  function handleClick() {
    setDesign(!design);
  }

  return (
    <div>
      <div>
        <h1>Do you Love me ?</h1>
      </div>

      <button
        className={`w-48 p-4 ${
          design ? "bg-white text-blue-500" : "bg-blue-500 text-white"
        }`}
        onClick={handleClick}
      >
        Yes
      </button>
    </div>
  );
};

export default MyPage;
