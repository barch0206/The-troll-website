import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SpecialOffer.css";

function SpecialOffer() {
  const navigate = useNavigate();
  const [trolled, setTrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleBackClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount >= 2) {
      setTrolled(true);
      setTimeout(() => {
        navigate("/how-to-make-toast");
      }, 3000);
    }
  };

  const fakeLoadingMessages = [
    "Initializing quantum prize distribution...",
    "Calibrating invisible particle accelerator...",
    "Downloading more RAM for your FREE prize...",
    "Consulting with interdimensional prize committee...",
    "Polishing the transparency of your invisible item...",
    "Teaching AI how to visualize nothingness...",
    "Borrowing computing power from aliens...",
    "Reversing the polarity of the neutron flow...",
    "Convincing electrons to behave...",
    "Dividing by zero (this might take a while)..."
  ];

  const [currentMessage, setCurrentMessage] = useState(fakeLoadingMessages[0]);

  useEffect(() => {
    if (!trolled) {
      const interval = setInterval(() => {
        setCurrentMessage(prev => {
          const currentIndex = fakeLoadingMessages.indexOf(prev);
          const nextIndex = (currentIndex + 1) % fakeLoadingMessages.length;
          return fakeLoadingMessages[nextIndex];
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [trolled]);

  return (
    <div className="special-offer-container">
      <div className="floating-emojis">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="floating-emoji" style={{
            animationDelay: `${i * 0.5}s`,
            left: `${Math.random() * 100}%`
          }}>
            {['🎁', '🎉', '🤡', '💩', '🤑', '😂', '🎭', '🧌', '👑', '💎'][i % 10]}
          </div>
        ))}
      </div>

      {!trolled ? (
        <>
          <h1 className="loading-title">⏳ ULTRA-HD 4K LOADING...</h1>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">87.3% complete (but who's counting?)</div>
          </div>
          
          <p className="loading-message">{currentMessage}</p>
          
          <div className="disclaimer">
            <p>⚠️ WARNING: This offer is 100% legit and not a scam!</p>
            <p>Our lawyers made us say that. Probably.</p>
          </div>

          <p className="prize-description">
            Your <b>SUPER MEGA ULTRA INVISIBLE PRIZE PACKAGE</b> includes:
          </p>
          <ul className="prize-features">
            <li>✅ Invisible diamonds (much sparklier than visible ones)</li>
            <li>✅ Digital air (compatible with all devices)</li>
            <li>✅ NFT of nothingness (very valuable in meta-universes)</li>
            <li>✅ Lifetime supply of maybe (terms and conditions apply)</li>
          </ul>

          <button
            onClick={handleBackClick}
            className="troll-button"
          >
            {clickCount === 0 ? "⬅️ CLAIM YOUR PRIZE NOW!" : 
             clickCount === 1 ? "⬅️ SERIOUSLY, CLICK HERE!" : 
             "⬅️ OKAY, FINE, GO BACK"}
          </button>

          <div className="fake-notification">
            <span className="notification-badge">3,742</span>
            people are viewing this offer RIGHT NOW!
          </div>
        </>
      ) : (
        <div className="trolled-message">
          <h1 className="trolled-title">😂 PSYCHE! YOU GOT TROLLED! 🤣</h1>
          <div className="trolled-animation">
            <div className="spinning-emoji">🤡</div>
            <div className="spinning-emoji">🎪</div>
            <div className="spinning-emoji">🎭</div>
          </div>
          <p className="trolled-text">
            Redirecting you to something actually useful... 
            like how to make toast! 🍞
          </p>
          <p className="countdown">Redirecting in 3...</p>
        </div>
      )}
    </div>
  );
}

export default SpecialOffer;