import React, { useState, useEffect } from "react";
import dogImage from '../assets/images/dog.jpg';
import catImage from '../assets/images/cat.png';
import elephantImage from '../assets/images/elephant.png';
import lionImage from '../assets/images/lion.png';
import tigerImage from '../assets/images/tiger.png';
import turtleImage from '../assets/images/turtle.png';
import birdImage from '../assets/images/bird.png';
import giraffeImage from '../assets/images/giraffe.jpg';
import kangarooImage from '../assets/images/kangaroo.png';
import monkeyImage from '../assets/images/monkey.jpg';
import fishImage from '../assets/images/fish.png';
import mouseImage from '../assets/images/mouse.png';
import jungleImage from '../assets/images/jungleImage.jpg';

export default function Animals() {
  const allAnimals = [
    {
      name: "Dog",
      value: "dog",
      image: dogImage,
    },
    {
        name: "Cat",
        value: "cat",
        image: catImage,
      },
      {
        name: "Elephant",
        value: "elephant",
        image: elephantImage,
      },
      {
        name: "Lion",
        value: "lion",
        image: lionImage,
      },
      {
        name: "Tiger",
        value: "tiger",
        image: tigerImage,
      },
      {
        name: "Turtle",
        value: "turtle",
        image: turtleImage,
      },
      {
        name: "Bird",
        value: "bird",
        image: birdImage,
      },
      {
        name: "Giraffe",
        value: "giraffe",
        image: giraffeImage,
      },
      {
        name: "Kangaroo",
        value: "kangaroo",
        image: kangarooImage,
      },
      {
        name: "Monkey",
        value: "monkey",
        image: monkeyImage,
      },
      {
        name: "Fish",
        value: "fish",
        image: fishImage,
      },
      {
        name: "Mouse",
        value: "mouse",
        image: mouseImage,
      }
  ];

  const [randomAnimal, setRandomAnimal] = useState('');
  const [message, setMessage] = useState('');
  const [displayAnimals, setDisplayAnimals] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [gameOver, setGameOver] = useState(false); // Track game over state

  useEffect(() => {
    if (questionCount >= 10) {
      setGameOver(true); // End the game after 10 questions
    } else {
      generateQuestion();
    }
  }, [questionCount]);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * allAnimals.length);
    setRandomAnimal(allAnimals[randomIndex]);
    setMessage('');

    const availableAnimals = allAnimals.filter(animal => animal.name !== allAnimals[randomIndex].name);
    const shuffledAnimals = shuffleArray(availableAnimals).slice(0, 3);
    const animalsWithCorrectAnswer = [...shuffledAnimals, allAnimals[randomIndex]];
    const shuffledDisplayAnimals = shuffleArray(animalsWithCorrectAnswer);
    setDisplayAnimals(shuffledDisplayAnimals);
  };

  const handleStartOver = () => {
    setQuestionCount(0);
    setGameOver(false);
    generateQuestion();
  };

  const checkAnimal = (selectedAnimal) => {
    console.log('randomAnimal:', randomAnimal);
    if (randomAnimal && selectedAnimal === randomAnimal.name) {
      setQuestionCount(prevCount => prevCount + 1); // Increment question count
      if (questionCount >= 10) {
        setGameOver(true); // End the game after 10 questions
      } else {
        generateQuestion(); // Load the next question
      }
    } else {
      const selectedAnimalName = allAnimals.find(animal => animal.value === selectedAnimal).name;
      window.alert(`That's a ${selectedAnimalName}! Try again.`);
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex, tempValue;

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
      className="h-full w-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${jungleImage})`, backgroundSize: 'cover' }}
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
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
            Click on the {randomAnimal.name}!
          </h1>
          <div className="flex flex-row space-x-4">
            {displayAnimals.map((animal, index) => (
              <div
                key={index}
                className="bg-gray-100 p-1 rounded-md shadow-sm cursor-pointer"
                onClick={() => checkAnimal(animal.name)}
              >
                <div className="aspect-w-2 aspect-h-3 overflow-hidden bg-gray-200 group-hover:opacity-75">
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
};