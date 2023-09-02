import React, { useState, useEffect } from "react";

import dogImage from "../assets/images/animalgame/dog.jpg";
import catImage from "../assets/images/animalgame/cat.png";
import elephantImage from "../assets/images/animalgame/elephant.png";
import lionImage from "../assets/images/animalgame/lion.png";
import tigerImage from "../assets/images/animalgame/tiger.png";
import turtleImage from "../assets/images/animalgame/turtle.png";
import birdImage from "../assets/images/animalgame/bird.png";
import giraffeImage from "../assets/images/animalgame/giraffe.jpg";
import kangarooImage from "../assets/images/animalgame/kangaroo.png";
import monkeyImage from "../assets/images/animalgame/monkey.jpg";
import fishImage from "../assets/images/animalgame/fish.png";
import mouseImage from "../assets/images/animalgame/mouse.png";
import jungleImage from "../assets/images/animalgame/jungle_image.jpg";

export default function Animals() {
  const allAnimals = [
    {
      name: "dog",
      value: "dog",
      image: dogImage,
    },
    {
      name: "cat",
      value: "cat",
      image: catImage,
    },
    {
      name: "elephant",
      value: "elephant",
      image: elephantImage,
    },
    {
      name: "lion",
      value: "lion",
      image: lionImage,
    },
    {
      name: "tiger",
      value: "tiger",
      image: tigerImage,
    },
    {
      name: "turtle",
      value: "turtle",
      image: turtleImage,
    },
    {
      name: "bird",
      value: "bird",
      image: birdImage,
    },
    {
      name: "giraffe",
      value: "giraffe",
      image: giraffeImage,
    },
    {
      name: "kangaroo",
      value: "kangaroo",
      image: kangarooImage,
    },
    {
      name: "monkey",
      value: "monkey",
      image: monkeyImage,
    },
    {
      name: "fish",
      value: "fish",
      image: fishImage,
    },
    {
      name: "mouse",
      value: "mouse",
      image: mouseImage,
    },
  ];

  const [randomAnimal, setRandomAnimal] = useState("");
  const [message, setMessage] = useState("");
  const [displayAnimals, setDisplayAnimals] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswerDisplayed, setCorrectAnswerDisplayed] = useState(false);

  useEffect(() => {
    if (questionCount >= 10) {
      setGameOver(true);
    } else if (correctAnswerDisplayed) {
      // Delay generating the next question by 2 seconds
      const delay = setTimeout(() => {
        setCorrectAnswerDisplayed(false);
        setSelectedOption(""); // Remove the highlight
        generateQuestion();
      }, 2000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(delay);
    } else {
      generateQuestion();
    }
  }, [questionCount, correctAnswerDisplayed]);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * allAnimals.length);
    const newRandomAnimal = allAnimals[randomIndex];
    setRandomAnimal(newRandomAnimal);
    setMessage("");
    setSelectedOption(""); // Clear the selected option

    const availableAnimals = allAnimals.filter(
      (animal) => animal.name !== newRandomAnimal.name
    );
    const shuffledAnimals = shuffleArray(availableAnimals).slice(0, 3);
    const animalsWithCorrectAnswer = [...shuffledAnimals, newRandomAnimal];
    const shuffledDisplayAnimals = shuffleArray(animalsWithCorrectAnswer);
    setDisplayAnimals(shuffledDisplayAnimals);
  };

  const handleStartOver = () => {
    setQuestionCount(0);
    setGameOver(false);
    generateQuestion();
  };

  const checkAnimal = (selectedAnimal) => {
    setSelectedOption(selectedAnimal);

    if (randomAnimal && selectedAnimal === randomAnimal.value) {
      setQuestionCount((prevCount) => prevCount + 1);

      if (questionCount >= 9) {
        setGameOver(true);
      } else {
        setMessage("That's correct!");
        setCorrectAnswerDisplayed(true); // Trigger the delay
      }
    } else if (randomAnimal) {
      const selectedAnimalName = allAnimals.find(
        (animal) => animal.value === selectedAnimal
      ).name;
      setMessage(`That's a ${selectedAnimalName}! Try again.`);
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex,
      tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }

    return array;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${jungleImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
  
      {gameOver ? (
        <div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              Game Over!
            </h1>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleStartOver}
            >
              Start Over
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            maxWidth: "500px",
            maxHeight: "750px",
            padding: "1.5rem",
            backgroundColor: "white",
            borderRadius: "0.5rem",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
            Click on the {randomAnimal.name}!
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem", // Adjust the gap as needed
            }}
          >
            {displayAnimals.map((animal, index) => (
              <div
              key={index}
              className={`bg-gray-100 p-1 rounded-md shadow-sm cursor-pointer ${
                selectedOption === animal.name
                  ? randomAnimal.name === animal.name
                    ? "bg-green-500 border-2 border-green-600"
                    : "bg-red-500 border-2 border-red-600"
                  : ""
              }`}
              onClick={() => checkAnimal(animal.name)}
            >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden bg-gray-200 group-hover:opacity-75">
                  <div className="h-full w-full bg-white p-2">
                    <img
                      src={animal.image}
                      alt={`Image of ${animal.name}`}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <h3 className="text-xs font-medium text-gray-900"></h3>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4">{message}</p>
        </div>
      )}
    </div>
  );
}
