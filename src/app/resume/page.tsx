"use client";

import React from "react";

const Resume = () => {
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1lZAXqJ6jaTUdsT4Q8kGdQEYn9_Yd8tBa/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        View My Resume
      </button>
    </div>
  );
};

export default Resume;
