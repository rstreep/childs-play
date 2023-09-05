import React, { useState, useEffect } from 'react';

import spaceWallpaper from "../assets/images/spellinggame/space_background.jpg"
import starImage from "../assets/images/spellinggame/star.jpg";
import alienImage from "../assets/images/spellinggame/alien.jpg";
import earthImage from "../assets/images/spellinggame/earth.jpg";
import moonImage from "../assets/images/spellinggame/moon.jpg";
import shipImage from "../assets/images/spellinggame/ship.jpg";
import sunImage from "../assets/images/spellinggame/sun.jpg";
import spaceImage from "../assets/images/spellinggame/space.jpg";
import planetImage from "../assets/images/spellinggame/planet.jpg";
import skyImage from "../assets/images/spellinggame/sky.jpg";
import cometImage from "../assets/images/spellinggame/comet.jpg";

//list words, answers, and images in an array
const wordsAndAnswers = [
    { word: "STA_", answer: "R" , finalword: "STAR", image: starImage },
    { word: "AL_EN", answer: "I" , finalword: "ALIEN" , image: alienImage },
    { word: "_ARTH", answer: "E" , finalword: "EARTH", image: earthImage },
    { word: "MOO_", answer: "N" , finalword: "MOON",image: moonImage },
    { word: "SH_P", answer: "I" , finalword: "SHIP", image: shipImage },
    { word: "SU_", answer: "N" , finalword: "SUN", image: sunImage },
    { word: "S_ACE", answer: "P" , finalword: "SPACE", image: spaceImage },
    { word: "PLA_ET", answer: "N" , finalword: "PLANET", image: planetImage },
    { word: "SK_", answer: "Y" , finalword: "SKY", image: skyImage },
    { word: "C_MET", answer: "O" , finalword: "COMET", image: cometImage }
  ];

// function to generate question options.
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
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [showNextWord, setShowNextWord] = useState(false); 
  
  const currentWordInfo = wordsAndAnswers[currentWordIndex];

  //check if answer is correct
  const isCorrectAnswer = (option) => option === currentWordInfo.answer;

  useEffect(() => {
    const newOptions = generateOptions(currentWordInfo.answer);
    setOptions(newOptions);
    setSelectedOption(null);
    setShowAnswer(false);
  }, [currentWordInfo]);

  //define what happens when an option is clicked
  const handleOptionClick = (option) => {
    if (isCorrectAnswer(option)) {
      setModalMessage("Correct Answer!");
      setShowAnswer(true);
      setShowNextWord(true);
    } else {
      setModalMessage("Wrong answer! Try guessing again.");
      setShowAnswer(false);
      setShowNextWord(false);
    }

    setSelectedOption(option); // Always set the selected option
    setToggleModal(true);
  };

  // generate a new word
  const moveToNextWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsAndAnswers.length);
    setCurrentWordIndex(randomIndex);
    const newOptions = generateOptions(wordsAndAnswers[randomIndex].answer);
    setOptions(newOptions);
    setSelectedOption(null);
    setShowAnswer(false);
    setShowNextWord(false); 
  };

  useEffect(() => {
    const newOptions = generateOptions(currentWordInfo.answer);
    setOptions(newOptions);
    setSelectedOption(null);
    setShowAnswer(false);
  }, [currentWordInfo]);

  useEffect(() => {
    if (showNextWord && isCorrectAnswer(selectedOption)) {
      moveToNextWord();
    }
  }, [showNextWord, selectedOption]);

  return (

<div 
  style={{
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    minHeight: '100vh', 
    backgroundImage: `url(${spaceWallpaper})`,
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
              width: '35%',
              marginBottom: '1rem',
            }}
            src={currentWordInfo.image}
            alt={currentWordInfo.finalword}
          />
        </div>
        {showAnswer ? (
         <p className="answer">{currentWordInfo.word}</p>
        ) : (
         <p>{currentWordInfo.word.replace(currentWordInfo.answer, "_")}</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
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
        {toggleModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9999",
          }}
        >
          <div
            style={{
              background: "grey",
              color: "white",
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{modalMessage}</h3>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                border: "none",
                cursor: "pointer",
                marginTop: "1rem",
              }}
              onClick={() => setToggleModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
);
};

export default SpellingGame;
