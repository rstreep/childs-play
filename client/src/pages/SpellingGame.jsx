import React, { useState, useEffect } from "react";

//list words, answers, images, and sounds in an array
export default function SpellingGame() {
  const wordsAndAnswers = [
    { word: "CAT", answer: "C" /*, image: 'cong-h_cat.jpg', sound: 'Cat' */ },
    { word: "BED", answer: "D" /*, image: 'bed.jpg', sound: '' */ },
    { word: "BIRD", answer: "R" /*, image: 'bird.jpg', sound: ''*/ },
    { word: "SNOW", answer: "N" /*, image: '', sound: ''*/ },
    { word: "DOG", answer: "G" /*, image: '', sound: '' */ },
    { word: "SUN", answer: "U" /*, image: '', sound: ''*/ },
    { word: "TOY", answer: "O" /*, image: '', sound: '' */ },
    { word: "HAT", answer: "H" /*, image: '', sound: '' */ },
    { word: "MOON", answer: "O" /*, image: '', sound: ''*/ },
    { word: "FISH", answer: "S" /*, image: '', sound: ''*/ },
    { word: "TREE", answer: "E" /*, image: '', sound: '' */ },
    { word: "BALL", answer: "L" /*, image: '', sound: ''*/ },
    { word: "MOP", answer: "P" /*, image: '', sound: '' */ },
    { word: "PIG", answer: "I" /*, image: '', sound: '' */ },
    { word: "BOOK", answer: "B" /*, image: '', sound: ''*/ },
    { word: "STAR", answer: "S" /*, image: '', sound: '' */ },
    { word: "COW", answer: "W" /*, image: '', sound: '' */ },
    { word: "BOAT", answer: "O" /*, image: '', sound: '' */ }
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

  const game = () => {
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
      }, 2000); // Move to the next word after 2 seconds
    };
  };

  return (
    <div>
      <h1>Spelling Game</h1>
      <div>
        <p>Score: {score}</p>
      </div>
      <div>
        <h2>What letter is missing from the word? </h2>
{/*
        <img
          src={`images/${currentWordInfo.image}`}
          alt={currentWordInfo.word}
        />
        <audio controls>
          <source src={`sounds/${currentWordInfo.sound}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>{" "}
  */}
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
}

