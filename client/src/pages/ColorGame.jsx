import React from 'react';

const ColorGame = ({ questionData }) => {
  console.log({ questionData });
  
  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
      {/* Card Header */}
      <div className="text-center font-bold text-xl mb-4">
        Color Game
      </div>

      {/* Question Text */}
      <div className="mb-4">
        {questionData?.question}
      </div>

      {/* Question Image */}
      <img
        style={{ width: "15%" }}
        src={questionData?.img}
        alt="Question"
        className="w-full h-auto mb-4"
      />

      {/* Choices */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-evenly" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="red" style={{ backgroundColor: "red", width: "200%", height: "200%", }}>red</label>
          <label htmlFor="yellow" style={{ backgroundColor: "yellow", width: "200%", height: "200%",  }}>yellow</label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="blue" style={{ backgroundColor: "blue", width: "200%", height: "200%",  }}>blue</label>
          <label htmlFor="purple" style={{ backgroundColor: "purple", width: "200%", height: "200%",  }}>purple</label>
        </div>
      </div>
    </div>
  );
};

export default ColorGame;