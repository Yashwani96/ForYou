import { useState } from "react";

const TimeSelector = () => {
  // Store the selected time button
  const [selectedTime, setSelectedTime] = useState(null);

  // Mock time data (you can modify this as needed)
  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ];
  return (
    <div>
      <h1 className="p-8">Select Time</h1>{" "}
      <div className="grid grid-cols-6 gap-4 mx-20">
        {times.map((time, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(index)}
            className={`px-4 py-2 border-b  hover:border-blue-500 
        ${
          selectedTime === index
            ? "border-b-4 border-b-blue-500 text-blue-500"
            : ""
        }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;
