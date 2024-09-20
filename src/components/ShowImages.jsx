import React from "react";
import { useState } from "react";

const ShowImages = () => {
  const [images, setImages] = useState([
    "bg-gray-200",
    "bg-blue-200",
    "bg-gray-200",
    "bg-gray-200",
    "bg-gray-200",
    "bg-gray-200",
  ]);

  const imageSequence = [
    "/images/pic1.jpeg",
    "/images/pic3.jpeg",
    "/images/pic2.jpeg",
    "/images/pic4.jpeg",
    "/images/pic5.jpeg",
    "/images/pic6.jpeg",
  ];

  const [position, setPosition] = useState(1);
  const [change, setChange] = useState(true);

  function handleClick() {
    changeImage(0);
    setChange(!change);
  }

  function changeImage(index) {
    if (index < 6) {
      setTimeout(() => {
        setImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = imageSequence[index];
          return newImages;
        });
        changeImage(index + 1);
      }, 1000);
    }
  }

  // Function to handle the hover and move the button to the next position
  const handleHover = () => {
    setPosition((prevPosition) => (prevPosition % 4) + 1);
  };

  // Mapping positions to Tailwind CSS classes with adjusted values for better visibility
  const positionClasses = {
    1: "top-10 left-10",
    2: "top-10 right-10",
    3: "bottom-10 left-10",
    4: "bottom-10 right-10",
  };

  return (
    <div className="h-screen w-screen flex flex-wrap">
      {images.map((image, index) => (
        <div
          key={index}
          className={`transition-all duration-1000 ease-in-out w-1/3 h-1/2 bg-cover bg-center `}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold mb-6">
          {change ? "Do You Love Me? " : "ILove You TOO"}{" "}
        </h1>
        <div className="flex gap-28">
          <button
            className="bg-black text-white p-4 rounded hover:bg-white hover:text-black transition-all"
            onClick={handleClick}
          >
            Yes
          </button>
          <div className="relative w-full h-full">
            <button
              onMouseEnter={handleHover}
              className={`absolute bg-black text-white p-4 rounded hover:bg-white hover:text-black transition-all ${positionClasses[position]}`}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowImages;
