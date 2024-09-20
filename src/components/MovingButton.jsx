import { useState } from "react";

const MovingButton = () => {
  // State to track the button's current position
  const [position, setPosition] = useState(1);

  // Function to handle the hover and move the button to the next position
  const handleHover = () => {
    // Move to the next position (looping from 1 to 4)
    setPosition((prevPosition) => (prevPosition % 4) + 1);
  };

  // Mapping positions to Tailwind CSS classes with adjusted values for better visibility
  const positionClasses = {
    1: "top-10 left-10", // Position 1: Top left corner
    2: "top-10 right-10", // Position 2: Top right corner
    3: "bottom-10 left-10", // Position 3: Bottom left corner
    4: "bottom-10 right-10", // Position 4: Bottom right corner
  };

  return (
    <div className="relative w-full h-full">
      <button
        onMouseEnter={handleHover}
        className={`absolute bg-black text-white p-4 rounded hover:bg-white hover:text-black transition-all ${positionClasses[position]}`}
      >
        NO
      </button>
    </div>
  );
};

export default MovingButton;
