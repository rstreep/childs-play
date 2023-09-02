import React, { useState, useEffect } from 'react';

//list words, answers, images, and sounds in an array
const wordsAndAnswers = [
    { word: "STA_", answer: "R" , finalword: "STAR", image: 'star.jpg' },
    { word: "AL_EN", answer: "I" , finalword: "ALIEN" , image: 'alien.jpg' },
    { word: "_ARTH", answer: "E" , finalword: "EARTH", image: 'earth.jpg'},
    { word: "MO_N", answer: "O" , finalword: "MOON",image: 'moon.jpg'},
    { word: "SH_P", answer: "I" , finalword: "SHIP", image: 'ship.jpg'},
    { word: "SU_", answer: "N" , finalword: "SUN", image: 'sun.jpg'},
    { word: "S_ACE", answer: "P" , finalword: "SPACE", image: 'space.jpg'},
    { word: "PLA_ET", answer: "N" , finalword: "PLANET", image: 'planet.jpg'},
    { word: "SK_", answer: "Y" , finalword: "SKY", image: 'sky.jpg'},
    { word: "C_MET", answer: "O" , finalword: "COMET", image: 'comet.jpg'}
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

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordsAndAnswers.length);
    setCurrentWordIndex(randomIndex);

    const newOptions = generateOptions(wordsAndAnswers[randomIndex].answer);
    setOptions(newOptions);
    setSelectedOption(null);
    setShowAnswer(false);
  }, [score]);

  
  return (

<div 
  style={{
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    minHeight: '100vh', 
    backgroundImage: `url('./src/assets/images/spellinggame/space_background.jpg')`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
  }}
  >
    <div
       style={{
        maxWidth: "500px",
        padding: "1.5rem",
        backgroundColor: "white",
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
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center' 
          }}>
          <img
            style={{
              width: '35%', // Adjust the width as needed
              marginBottom: '1rem',
            }}
            src={`./src/assets/images/spellinggame/${currentWordInfo.image}`}
            alt={currentWordInfo.finalword}
          />
        </div>
        {showAnswer ? (
          <p className="answer">{currentWordInfo.word}</p>
        ) : (
          <p>{currentWordInfo.word.replace(selectedOption, "_")}</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent:"space-around",
            flexWrap: "wrap",
          }}
        >
          {options.map((option, index) => (
            <button   
            style={{            
            backgroundColor: "#3949ab",
            color: "#00bcd4",
            padding: "0.5rem",
            borderRadius: "0.25rem",
            width: "45%",
            margin: "0.5rem",
            fontWeight: "bold",
            }}
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
</div>
  );
};

export default SpellingGame;
