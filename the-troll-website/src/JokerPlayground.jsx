// JokerPlayground.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './JokerPlayground.css';

const JokerPlayground = () => {
    const [currentStyle, setCurrentStyle] = useState(0);
    const [isMirrored, setIsMirrored] = useState(false);
    const exitButtonRef = useRef(null);
    const redDotRef = useRef(null);
    const navigate = useNavigate();

    // Different style combinations for the page
    const styleThemes = [
        {
            bg: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
            font: "'Comic Neue', cursive",
            color: '#d35400'
        },
        {
            bg: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
            font: "'Pacifico', cursive",
            color: '#2980b9'
        },
        {
            bg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            font: "'Luckiest Guy', cursive",
            color: '#e74c3c'
        },
        {
            bg: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
            font: "'Bangers', cursive",
            color: '#27ae60'
        },
        {
            bg: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
            font: "'Permanent Marker', cursive",
            color: '#16a085'
        }
    ];

    // Function to move the exit button away from cursor
    const moveExitButton = useCallback((e) => {
        if (!exitButtonRef.current) return;

        const button = exitButtonRef.current;
        const rect = button.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        const distanceX = e.clientX - buttonCenterX;
        const distanceY = e.clientY - buttonCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 100) {
            const moveX = (distanceX / distance) * 110;
            const moveY = (distanceY / distance) * 110;

            button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    }, []);

    // Function to make the red dot follow cursor
    const moveRedDot = useCallback((e) => {
        if (!redDotRef.current) return;

        const dot = redDotRef.current;
        dot.style.left = `${e.clientX - 10}px`;
        dot.style.top = `${e.clientY - 10}px`;
    }, []);

    // Set up effects
    useEffect(() => {
        // Set timeout to redirect after 40 seconds
        const redirectTimer = setTimeout(() => {
            navigate("/infinite-scroll-page"); // adjust path to your Infinite Scroll page route
        }, 20000); // 20 seconds

        // Change styles every 10 seconds
        const styleInterval = setInterval(() => {
            setCurrentStyle(prev => (prev + 1) % styleThemes.length);
        }, 10000);

        // Mirror effect - every 30 seconds for 10 seconds
        const startMirrorEffect = () => {
            setIsMirrored(true);
            setTimeout(() => {
                setIsMirrored(false);
                // Schedule the next mirror effect
                setTimeout(startMirrorEffect, 30000); // 30 seconds delay
            }, 10000); // 10 seconds duration
        };

        // Start the mirror effect cycle
        const mirrorTimeout = setTimeout(startMirrorEffect, 30000);

        // Add event listeners
        document.addEventListener('mousemove', moveExitButton);
        document.addEventListener('mousemove', moveRedDot);

        // Clean up
        return () => {
            clearTimeout(redirectTimer);
            clearInterval(styleInterval);
            clearTimeout(mirrorTimeout);
            document.removeEventListener('mousemove', moveExitButton);
            document.removeEventListener('mousemove', moveRedDot);
        };
    }, [moveExitButton, moveRedDot, styleThemes.length, navigate]); // Added navigate to dependencies

    return (
        <div
            className={`joker-playground ${isMirrored ? 'mirrored' : ''}`}
            style={{
                background: styleThemes[currentStyle].bg,
                fontFamily: styleThemes[currentStyle].font,
                color: styleThemes[currentStyle].color
            }}
        >
            {/* Red dot that follows cursor */}
            <div ref={redDotRef} className="red-dot"></div>

            {/* Exit button that runs away */}
            <button
                ref={exitButtonRef}
                className="exit-button"
                onClick={() => navigate('/')}
            >
                ✕
            </button>

            <div className="container">
                {/* ... rest of your JSX content ... */}
                <header>
                    <h1>JOKER PLAYGROUND - WHERE COMEDY RULES!</h1>
                    <div className="subtitle">Step into the wildest, wackiest corner of the internet!</div>
                </header>

                <section className="welcome-section">
                    <h2>Welcome to the Ultimate Joke Zone!</h2>
                    <p>Step into the wildest, wackiest corner of the internet where puns are king, dad jokes reign supreme, and laughter is the only currency that matters! This is where serious people come to lose their minds and find their funny bones.</p>
                </section>

                <section className="code-section">
                    <h2>The Joker's Code of Conduct:</h2>
                    <ol>
                        <li>If it's not funny, make it funnier</li>
                        <li>Puns are mandatory, groans are encouraged</li>
                        <li>Dad jokes are considered high art</li>
                        <li>Knock-knock jokes never get old</li>
                        <li>When in doubt, add more silly</li>
                    </ol>
                </section>

                <section className="jokes-section">
                    <h2>Classic Knee-Slappers:</h2>
                    <ul>
                        <li><strong>Why don't scientists trust atoms?</strong> Because they make up everything!</li>
                        <li><strong>What do you call a fake noodle?</strong> An impasta!</li>
                        <li><strong>Why did the scarecrow win an award?</strong> He was outstanding in his field!</li>
                        <li><strong>What's the best thing about Switzerland?</strong> I don't know, but the flag is a big plus!</li>
                        <li><strong>Why don't eggs tell jokes?</strong> They'd crack each other up!</li>
                    </ul>
                </section>

                <section className="pun-section">
                    <h2>Pun-derful One-Liners:</h2>
                    <ul>
                        <li>I wondered why the baseball kept getting bigger. Then it hit me.</li>
                        <li>I'm reading a book about anti-gravity. It's impossible to put down!</li>
                        <li>Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!</li>
                        <li>I told my wife she was drawing her eyebrows too high. She looked surprised.</li>
                        <li>The early bird might get the worm, but the second mouse gets the cheese!</li>
                    </ul>
                </section>

                <section className="dad-jokes-section">
                    <h2>Ridiculously Bad Dad Jokes:</h2>
                    <ul>
                        <li>Hi Hungry, I'm Dad!</li>
                        <li>Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!</li>
                        <li>What do you call a bear with no teeth? A gummy bear!</li>
                        <li>I only know 25 letters of the alphabet. I don't know Y.</li>
                        <li>What did the ocean say to the beach? Nothing, it just waved!</li>
                    </ul>
                </section>

                <section className="knock-knock-section">
                    <h2>Knock-Knock Comedy Corner:</h2>
                    <div className="knock-knock">
                        <p><strong>Knock knock!</strong><br />
                            Who's there?<br />
                            <strong>Interrupting cow.</strong><br />
                            Interrupting cow w—<br />
                            <strong>MOOOOO!</strong></p>
                    </div>
                    <div className="knock-knock">
                        <p><strong>Knock knock!</strong><br />
                            Who's there?<br />
                            <strong>Lettuce.</strong><br />
                            Lettuce who?<br />
                            <strong>Lettuce in, it's cold out here!</strong></p>
                    </div>
                </section>

                <section className="humor-types-section">
                    <h2>The Joker's Guide to Different Types of Humor:</h2>
                    <div className="humor-type">
                        <h3>Wordplay Warriors:</h3>
                        <p>Masters of puns, spoonerisms, and linguistic lunacy. They believe every conversation needs at least three puns to be complete.</p>
                    </div>
                    <div className="humor-type">
                        <h3>Slapstick Specialists:</h3>
                        <p>Physical comedy experts who find humor in life's little accidents and mishaps. Banana peels are their best friends.</p>
                    </div>
                    <div className="humor-type">
                        <h3>Observational Comedians:</h3>
                        <p>They find the funny in everyday situations. Why do we park in driveways and drive on parkways? These are their people.</p>
                    </div>
                    <div className="humor-type">
                        <h3>Absurdist Jokers:</h3>
                        <p>Logic? What's that? They live in a world where penguins wear tuxedos to business meetings and cats file tax returns.</p>
                    </div>
                </section>

                <section className="signs-section">
                    <h2>Top 10 Signs You're a Professional Joker:</h2>
                    <ol>
                        <li>You've been banned from at least three restaurants for your comedy routines</li>
                        <li>Your family groans before you even start talking</li>
                        <li>You think "serious conversation" is an oxymoron</li>
                        <li>You've memorized every joke book ever written</li>
                        <li>People cross the street when they see you approaching with that "I have a joke" look</li>
                        <li>You rate movies based on how many times you can make jokes during them</li>
                        <li>Your idea of small talk is a 20-minute comedy routine</li>
                        <li>You've turned every serious moment into a comedy bit</li>
                        <li>You collect joke books like some people collect stamps</li>
                        <li>You believe laughter really IS the best medicine</li>
                    </ol>
                </section>

                <section className="scenarios-section">
                    <h2>Silly Scenarios:</h2>
                    <p>Imagine if animals could tell jokes:</p>
                    <ul>
                        <li>Chickens would only tell yolks</li>
                        <li>Fish would specialize in gill-ty pleasures</li>
                        <li>Cows would be experts at udder nonsense</li>
                        <li>Bees would buzz with bee-wildering humor</li>
                        <li>Cats would purr-fect their timing</li>
                    </ul>
                </section>

                <section className="dictionary-section">
                    <h2>The Joker's Dictionary:</h2>
                    <dl>
                        <dt>Pun-ishment:</dt>
                        <dd>What happens when you tell too many puns</dd>

                        <dt>Joke-ster:</dt>
                        <dd>Someone who's professionally silly</dd>

                        <dt>Laugh-ter:</dt>
                        <dd>The sound of joy escaping</dd>

                        <dt>Giggle-ometry:</dt>
                        <dd>The mathematical study of what makes things funny</dd>

                        <dt>Chuckle-head:</dt>
                        <dd>Term of endearment for fellow jokers</dd>
                    </dl>
                </section>

                <section className="random-section">
                    <h2>Random Acts of Silliness:</h2>
                    <ul>
                        <li>Why do elephants never use computers? They're afraid of the mouse!</li>
                        <li>What's orange and sounds like a parrot? A carrot!</li>
                        <li>Why don't skeletons fight each other? They don't have the guts!</li>
                        <li>What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!</li>
                        <li>Why did the coffee file a police report? It got mugged!</li>
                    </ul>
                </section>

                <section className="philosophy-section">
                    <h2>The Philosophy of Fun:</h2>
                    <p>Life's too short to be serious all the time. In the Joker Playground, we believe that every frown is just a smile that needs some encouragement, every groan from a bad pun is actually a compliment, and every eye-roll is just someone's way of saying "I wish I'd thought of that first!"</p>
                </section>

                <section className="wisdom-section">
                    <h2>Joker's Wisdom:</h2>
                    <p>Remember, stressed spelled backward is desserts. Coincidence? We think not! And always remember: if you can't laugh at yourself, we'll do it for you!</p>
                </section>

                <section className="challenge-section">
                    <h2>The Ultimate Joker Challenge:</h2>
                    <p>Can you go an entire day speaking only in jokes, puns, and riddles? Warning: May result in confused looks, uncontrollable laughter, or being crowned the unofficial comedy king or queen of your workplace!</p>
                    <p className="quote">"A day without laughter is a day wasted... and we don't waste days here in the Joker Playground!"</p>
                </section>
            </div>
        </div>
    );
};

export default JokerPlayground;