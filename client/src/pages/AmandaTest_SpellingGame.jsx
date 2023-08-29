import React, { useState, useEffect } from 'react';

//list words, answers, images, and sounds in an array
const wordsAndAnswers = [
    { word: "CAT", answer: "C" , image: 'cat.jpg'},
    { word: "BED", answer: "D" , image: 'bed.jpg' },
    { word: "BIRD", answer: "R" , image: 'bird.jpg'},
    { word: "SNOW", answer: "N" , image: 'snow.jpg'},
    { word: "DOG", answer: "G" , image: 'dog.jpg'},
    { word: "SUN", answer: "U" , image: 'sun.jpg'},
    { word: "TOY", answer: "O" , image: 'toy.jpg'},
    { word: "HAT", answer: "H" , image: 'hat.jpg'},
    { word: "MOON", answer: "O" , image: 'moon.jpg'},
    { word: "FISH", answer: "S" , image: 'fish.jpg'},
    { word: "TREE", answer: "E" , image: 'tree.jpg'},
    { word: "BALL", answer: "L" , image: 'ball.jpg'},
    { word: "MOP", answer: "P" , image: 'mop.jpg'},
    { word: "PIG", answer: "I" , image: 'pig.jpg' },
    { word: "BOOK", answer: "B" , image: 'book.jpg'},
    { word: "STAR", answer: "S" , image: 'star.jpg' },
    { word: "COW", answer: "W" , image: 'cow.jpg' },
    { word: "BOAT", answer: "O" , image: 'boat.jpg'}
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
    }, 2000); // Move to the next word after 2 seconds
  };

  return (
    <div>
      <h1>Spelling Game</h1>
      <div>
        <p>Score: {score}</p>
      </div>
      <div>
        <h2>What letter is missing from the word? </h2>
        <img
          src={`./assets/images/${currentWordInfo.image}`}
          alt={currentWordInfo.word}
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
