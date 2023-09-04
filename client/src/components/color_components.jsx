import { useState, useEffect } from "react";
import ColorQuestions from '../assets/questions_color/colorGame';
import food_wallpaper from '../assets/images/colorgame/food_wallpaper.jpg'
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * ColorQuestions.length);
  return ColorQuestions[randomIndex];
};

const ColorGame = () => {
  const [colorChoice, setColorChoice] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [displayColorQuestion, setDisplayColorQuestion] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);
  var toDisplayQuestion = null;

  const checkColorAnswer = () => {
    if (colorChoice === displayColorQuestion.answer) {
      setModalMessage("Correct!");
      toDisplayQuestion = getRandomColor()
      if (toDisplayQuestion.question === displayColorQuestion.question){
        toDisplayQuestion = getRandomColor();
      }
      else {
        setDisplayColorQuestion(toDisplayQuestion)
      }

    } else {
      setModalMessage("Wrong!..Try Guessing Again");
    }
    setColorChoice(null);
    setToggleModal(true);
  };

  useEffect(() => {
    if (colorChoice !== null) {
      checkColorAnswer();
    }
  }, [colorChoice]);

  useEffect(() => {
    if (displayColorQuestion === null) {
      setDisplayColorQuestion(getRandomColor())
    }
  }, []);


  const handleButtonClick = (choice) => {
    setColorChoice(choice);

  };

  useEffect(() => {
    // Reset colorChoice and close modal when displayColorQuestion changes
    setColorChoice(null);
  }, [displayColorQuestion]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${food_wallpaper})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <div style={{width: "50%", backgroundColor:"white", display:"flex",  flexWrap:"wrap", flexDirection:"column"}}>

    
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          position: "relative",
          left: "44%"

        }}
      >
        Color Game
      </div>
      <div
        style={{
          marginBottom: "1rem",
          position: "relative",
          left: "41%"
        }}
      >
        {displayColorQuestion?.question}
      </div>

      <img
        style={{
          width: "40%",
          height: "40vh",
          marginBottom: "1rem",
          display:"flex",
          justifyContent:"center",
          position: "relative",
          left: "30%"
        
        }}
        src={displayColorQuestion?.img}
        alt="Question"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5rem",
            width: "50%",
          }}
        >
          <button
            style={{
              backgroundColor: "red",
              color: "black",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
              width: "100%",
            }}
            onClick={() => handleButtonClick("red")}
            disabled={colorChoice !== null}
          >
            Red
          </button>
          <button
            style={{
              backgroundColor: "yellow",
              color: "black",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              width: "100%",
            }}
            onClick={() => handleButtonClick("yellow")}
            disabled={colorChoice !== null}
          >
            Yellow
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <button
            style={{
              backgroundColor: "#0096FF",
              color: "black",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
              width: "100%",
            }}
            onClick={() => handleButtonClick("blue")}
            disabled={colorChoice !== null}
          >
            Blue
          </button>
          <button
            style={{
              backgroundColor: "purple",
              color: "black",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              width: "100%",
            }}
            onClick={() => handleButtonClick("purple")}
            disabled={colorChoice !== null}
          >
            Purple
          </button>
        </div>
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
  );
};

export default ColorGame;