import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-3/4 p-8 mt-16 h-auto ">
      <h2 className="text-lg font-semibold mb-10">
        Schedule a follow up appointment
      </h2>

      {/* First and Last Name Section */}
      <div className="flex space-x-4 mb-10">
        {/* First Name Input */}
        <div className="flex-1">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="First Name"
          />
        </div>

        {/* Last Name Input */}
        <div className="flex-1 ">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Last Name"
          />
        </div>
      </div>

      {/* Age Section */}
      <div className="flex space-x-4 mb-10">
        {/* Age Input */}
        <div className="flex flex-1 items-center gap-56 ">
          <label className="block text-sm font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-1/2 bg-blue-100 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Gender Section */}
      <div className="mb-4 flex gap-48 items-center ">
        <label className="block text-sm font-medium mb-1">Gender</label>
        <div className="flex items-center space-x-4">
          {/* Female Button */}
          <label
            className={`px-4 py-2 border ${
              formData.gender === "Female"
                ? "bg-blue-100 border-blue-500"
                : "border-gray-300"
            } rounded cursor-pointer`}
          >
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              className="hidden"
            />
            Female
          </label>

          {/* Male Button */}
          <label
            className={`px-4 py-2 border ${
              formData.gender === "Male"
                ? "bg-blue-100 border-blue-500"
                : "border-gray-300"
            } rounded cursor-pointer`}
          >
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              className="hidden"
            />
            Male
          </label>
        </div>
      </div>
    </div>
  );
};

export default Form;
