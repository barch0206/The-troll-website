import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmPopup from "./ConfirmPopup";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const messages = [
    "Are you sure?",
    "Are you really sure?",
    "Are you 100% sure?",
    "Like… absolutely, positively, no-going-back sure?",
    "This is your last chance. Are you *really* sure?",
    "Alright, I’ll stop asking… Just kidding! Are you SURE?",
  ];

  const handleEnterClick = () => {
    setStep(1); // show the first popup
  };

  const handleYes = () => {
    if (step < messages.length) {
      setStep(step + 1);
    } else {
      navigate("/home2"); // finished all steps
    }
  };

  const handleNo = () => {
    setStep(0); // close popup, stay on Home
  };

  return (
    <div className="troll-container">
      <div className="background-animation">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="floating-shape shape4"></div>
      </div>
      
      <div className="content">
        <h1 className="title">Welcome to The Troll Website 🧌</h1>
        <p className="subtitle">This is the homepage. Proceed with caution!</p>

        <button
          onClick={handleEnterClick}
          className="enter-button"
        >
          ENTER WEBSITE
        </button>

        {step > 0 && (
          <ConfirmPopup
            message={messages[step - 1]}
            onYes={handleYes}
            onNo={handleNo}
          />
        )}
      </div>
    </div>
  );
}

export default Home;