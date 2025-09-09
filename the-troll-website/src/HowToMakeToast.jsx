import React, { useState, useEffect } from "react";
import "./HowToMakeToast.css";

export default function HowToMakeToast() {
  const [clownMode, setClownMode] = useState(false);

  // Auto trigger clown mode after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setClownMode(true);
      alert("HONK HONK HONKKKK HONK HONK! 🤡");
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // Extra: clown honk every 2s while in clown mode
  useEffect(() => {
    if (clownMode) {
      const honkTimer = setInterval(() => {
        console.log("HONK HONK 🤡");
      }, 2000);
      return () => clearInterval(honkTimer);
    }
  }, [clownMode]);

  return (
    <div className={clownMode ? "clown-body" : "normal-body"}>
      {!clownMode ? (
        <div className="normal-content">
          <h1>How to Make Perfect Toast: A Complete Guide</h1>
          <p>
            Making perfect toast is an art form that many take for granted.
            Follow this comprehensive guide to achieve golden, crispy perfection
            every time.
          </p>

          <h2>What You'll Need:</h2>
          <ul>
            <li>Fresh bread (preferably 1-2 days old for best results)</li>
            <li>A toaster or toaster oven</li>
            <li>Butter or your preferred spread</li>
            <li>A butter knife</li>
          </ul>

          <h2>Step-by-Step Instructions:</h2>

          <div className="step">
            <strong>Step 1: Choose Your Bread</strong>
            <br />
            Select a good quality bread. Slightly stale bread (1-2 days old)
            actually toasts better than fresh bread as it has less moisture
            content.
          </div>

          <div className="step">
            <strong>Step 2: Adjust Toaster Settings</strong>
            <br />
            Set your toaster to medium heat (usually setting 3-4 out of 6).
            Different breads require different settings - thicker slices need
            higher settings.
          </div>

          <div className="step">
            <strong>Step 3: Insert Bread Properly</strong>
            <br />
            Place bread slices in the toaster slots. Make sure they're sitting
            evenly and not tilted, which could cause uneven toasting.
          </div>

          <div className="step">
            <strong>Step 4: Start Toasting</strong>
            <br />
            Press down the lever firmly. You should hear a click indicating the
            mechanism has engaged properly.
          </div>

          <div className="step">
            <strong>Step 5: Monitor Progress</strong>
            <br />
            Keep an eye on your toast. Most toasters have a window or you can
            smell when it's nearly done. The aroma will change from bread-like
            to nutty.
          </div>

          <div className="step">
            <strong>Step 6: Remove and Butter</strong>
            <br />
            When the toast pops up, remove it immediately. Apply butter while
            it's still hot so it melts evenly into the surface.
          </div>

          <div className="warning">
            <strong>⚠️ Pro Tip:</strong> If your first slice isn't perfect,
            adjust the setting slightly for the next one. Every toaster is
            different, so it may take a few tries to find your perfect setting.
          </div>

          <h2>Troubleshooting Common Problems:</h2>
          <ul>
            <li>
              <strong>Too pale:</strong> Increase the heat setting by one level
            </li>
            <li>
              <strong>Too dark:</strong> Decrease the heat setting and check if
              your toaster needs cleaning
            </li>
            <li>
              <strong>Uneven toasting:</strong> Check if bread slices are the
              same thickness and properly positioned
            </li>
            <li>
              <strong>Toast gets stuck:</strong> Never use metal objects to
              retrieve stuck toast - unplug and wait for cooling
            </li>
          </ul>

          <p>
            With practice, you'll develop an instinct for perfect toast timing.
            Remember, the best toast is golden brown with a crispy exterior and
            soft, warm interior.
          </p>
        </div>
      ) : (
        <div className="clown-content">
          <div className="big-clown">🤡</div>
          <div className="clown-text">CLOWN CLOWN CLOWWWWWN CLOW CLOWN!</div>
          <div className="clown-text">
            HOW HOW HOWWWWWW HOW HOW TO TO TOOOO TO TO MAKE MAKE MAKEEEEE MAKE
            MAKE
          </div>
          <div className="clown-text">PERFECT PERFECT PERFECTTTTT PERFECT!</div>
          <div className="clown-text">TOAST TOAST TOASTTTTT TOAST!</div>
          <div style={{ fontSize: "36px", margin: "30px 0" }}>🍞🤡🍞🤡🍞🤡🍞</div>

          <div className="clown-text">
            STEP ONE ONE ONEEEEE: GET GET GETTTTT BREAD BREAD BREADDDDD!
          </div>
          <div className="clown-text">
            STEP TWO TWO TWOOOOOO: PUT PUT PUTTTTT IN TOASTER TOASTERRRRRR!
          </div>
          <div className="clown-text">
            STEP THREE THREE THREEEEEE: PRESS PRESS BUTTON BUTTON BUTTONNNNN!
          </div>
          <div className="clown-text">
            STEP FOUR FOUR FOURRRRRR: WAIT WAIT WAITTTTT ANDDDDD BECOME CLOWN!
          </div>

          <div style={{ fontSize: "60px", margin: "40px 0" }}>🤡🍞🤡🍞🤡</div>
          <div className="clown-text">
            CLOWN TOAST TOAST IS BEST BEST BESTTTTT TOAST!
          </div>
          <div style={{ fontSize: "72px" }} className="spin">
            🤡
          </div>

          {/* BACK BUTTON */}
          <button
            className="clown-button"
            onClick={() => setClownMode(false)}
          >
            ESCAPE ESCAPE ESCAPEEEE THE CLOWN 🤡
          </button>
        </div>
      )}
    </div>
  );
}
