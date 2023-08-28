import React from 'react';
import ColorGame from '../pages/ColorGame'; // Adjust the import path
import questions from '../assets/questions_color/colorGame'
const App = () => {

console.log(questions)
return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {questions.map((questionData, index) => (
        <ColorGame key={index} questionData={questionData} />
      ))}
    </div>
  );
};

export default App;