import React, { useState, useEffect } from 'react';

//list words, answers, images, and sounds in an array
const wordsAndAnswers = [
    { word: "_AT", answer: "C" , finalword: "CAT", image: 'cat.jpg'},
    { word: "BE_", answer: "D" , finalword: "BED" , image: 'bed.jpg' },
    { word: "BI_D", answer: "R" , finalword: "BIRD", image: 'bird.jpg'},
    { word: "S_OW", answer: "N" , finalword: "SNOW",image: 'snow.jpg'},
    { word: "DO_", answer: "G" , finalword: "DOG", image: 'dog.jpg'},
    { word: "S_N", answer: "U" , finalword: "SUN", image: 'sun.jpg'},
    { word: "T_Y", answer: "O" , finalword: "TOY", image: 'toy.jpg'},
    { word: "_AT", answer: "H" , finalword: "HAT", image: 'hat.jpg'},
    { word: "PI_", answer: "G" , finalword: "PIG", image: 'hat.jpg'},
    { word: "C_W", answer: "O" , finalword: "COW", image: 'hat.jpg'}
  ];

const generateOptions = (correctAnswer) => {
    const options = [correctAnswer];
    while (options.length < 4) {
      const randomLetter = String.fromCharCode(
        65 + Math.floor(Math.random() * 26)
      );
      if (!options.includes(randomLetter)) {
        options.push(randomLetter);
      }
    }
    return options.sort();
};

const SpellingGame = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentWordInfo = wordsAndAnswers[currentWordIndex];

  useEffect(() => {
    const newOptions = generateOptions(currentWordInfo.answer);
    setOptions(newOptions);
    setSelectedOption(null);
    setShowAnswer(false);
  }, [currentWordInfo]);

  const handleOptionClick = (option) => {
    if (option === currentWordInfo.answer) {
      setScore(score + 1);
    }
    setSelectedOption(option);
    setShowAnswer(true);
    setTimeout(() => {
      if (currentWordIndex < wordsAndAnswers.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        // Game over, handle the end of the game
      }
    }, 1000); // Move to the next word after 2 seconds
  };

  return (
    <div
       style={{
        maxWidth: "500px",
        padding: "1.5rem",
        backgroundColor: "black",
        borderRadius: "0.5rem",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }} >
      <h1      style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}>Spelling Game</h1>
      <div>
        <p>Score: {score}</p>
      </div>
      <div style={{
           marginBottom: "1rem",
        }}>
        <h2>What letter is missing from the word? </h2>
        <img
            style={{
            width: "35%",
            marginBottom: "1rem",
            }}
          src={`./src/assets/images/spellinggame/${currentWordInfo.image}`}
          alt={currentWordInfo.finalword}
        />

        {showAnswer ? (
          <p className="answer">{currentWordInfo.word}</p>
        ) : (
          <p>{currentWordInfo.word.replace(selectedOption, "_")}</p>
        )}
        <div>
          {options.map((option, index) => (
            <button
              key={index}
              className={`
                option
                ${
                  showAnswer && option === currentWordInfo.answer
                    ? "correct"
                    : ""
                }
                ${
                  showAnswer &&
                  option === selectedOption &&
                  option !== currentWordInfo.answer
                    ? "incorrect"
                    : ""
                }
              `}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpellingGame;
