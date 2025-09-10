// ClownPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClownPage.css';

const ClownPage = () => {
    const [currentJoke, setCurrentJoke] = useState(0);
    const [honkCount, setHonkCount] = useState(0);
    const [showSecretClown, setShowSecretClown] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [confettiActive, setConfettiActive] = useState(false);
    const [clownCount, setClownCount] = useState(0);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const jokes = [
        "Why don't clowns ever get speeding tickets? Because they're always in the slow lane! 🚗",
        "What do you call a clown in jail? A laughing stock! 😄",
        "Why did the clown go to the doctor? Because he felt a little funny! 🏥",
        "What's a clown's favorite type of car? A Volkswagen Beetle - it fits 20 clowns! 🚙",
        "Why don't clowns play poker? Because they always show their hand! 🃏"
    ];

    // Function to create a floating clown
    const createFloatingClown = () => {
        const clown = document.createElement('div');
        clown.className = 'floating-clown';
        clown.innerHTML = '🤡';
        
        // Random position
        const randomX = Math.random() * 80 + 10; // 10-90%
        const randomY = Math.random() * 80 + 10; // 10-90%
        
        clown.style.left = `${randomX}%`;
        clown.style.top = `${randomY}%`;
        
        // Random size
        const randomSize = Math.random() * 9 + 1; // 1-4em
        clown.style.fontSize = `${randomSize}em`;
        
        // Random animation duration
        const randomDuration = Math.random() * 40 + 5; // 5-15 seconds
        clown.style.animationDuration = `${randomDuration}s`;
        
        // Random animation delay
        const randomDelay = Math.random() * 5; // 0-5 seconds
        clown.style.animationDelay = `-${randomDelay}s`;
        
        document.body.appendChild(clown);
        setClownCount(prev => prev + 1);
        
        // Remove clown after animation completes
        setTimeout(() => {
            if (clown.parentNode) {
                clown.parentNode.removeChild(clown);
                setClownCount(prev => prev - 1);
            }
        }, randomDuration * 100000);
    };

    const playHonk = () => {
        setHonkCount(prev => prev + 1);

        // Create honk sound effect visually
        const honkSound = document.createElement('div');
        honkSound.textContent = 'HONK! 📯';
        honkSound.style.position = 'fixed';
        honkSound.style.left = '50%';
        honkSound.style.top = '50%';
        honkSound.style.transform = 'translate(-50%, -50%)';
        honkSound.style.fontSize = '3em';
        honkSound.style.fontWeight = 'bold';
        honkSound.style.color = '#ff6b6b';
        honkSound.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
        honkSound.style.zIndex = '9999';
        honkSound.style.pointerEvents = 'none';
        honkSound.style.animation = 'honkPop 1s ease forwards';

        document.body.appendChild(honkSound);

        setTimeout(() => {
            document.body.removeChild(honkSound);
        }, 1000);

        // Special effects after multiple honks
        if (honkCount >= 4 && honkCount < 8) {
            setConfettiActive(true);
            setTimeout(() => setConfettiActive(false), 3000);
        } else if (honkCount >= 8) {
            setIsFlipped(true);
            setTimeout(() => setIsFlipped(false), 2000);
        }
    };

    const showJoke = () => {
        setCurrentJoke((prev) => (prev + 1) % jokes.length);
    };

    const animateBalloons = () => {
        const balloons = document.querySelectorAll('.balloon');
        balloons.forEach(balloon => {
            const randomX = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            balloon.style.left = randomX + '%';
            balloon.style.animationDelay = `-${randomDelay}s`;
        });
    };

    // Infinite scroll troll feature
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
                if (scrollTop + clientHeight >= scrollHeight - 10) {
                    // User has scrolled to the bottom - add more content
                    const newContent = document.createElement('div');
                    newContent.className = 'clown-fact';
                    newContent.innerHTML = `
            <h2>🤡 MORE CLOWNS! 🤡</h2>
            <p>Did you really think you could reach the end? The clown parade never ends! Keep scrolling for more hilarious clown facts that may or may not be true!</p>
          `;
                    containerRef.current.appendChild(newContent);
                }
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    // Cursor follower troll
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (Math.random() < 0.01) { // 1% chance to show secret clown
                setShowSecretClown(true);
                const clown = document.getElementById('secret-clown');
                if (clown) {
                    clown.style.left = `${e.pageX - 30}px`;
                    clown.style.top = `${e.pageY - 30}px`;
                }
                setTimeout(() => setShowSecretClown(false), 1000);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Floating clown generator with exponential growth
    useEffect(() => {
        let clownInterval;
        let timeElapsed = 0;
        let clownMultiplier = 1;
        
        clownInterval = setInterval(() => {
            timeElapsed += 5;
            
            // Increase clown multiplier exponentially over time
            clownMultiplier = Math.pow(1.5, timeElapsed / 15); // Grows exponentially every 15 seconds
            
            // Create multiple clowns based on the multiplier
            const clownCountToCreate = Math.floor(clownMultiplier);
            for (let i = 0; i < clownCountToCreate; i++) {
                createFloatingClown();
            }
            
            // After 1 minute, redirect to joker playground
            if (timeElapsed >= 60) {
                clearInterval(clownInterval);
                navigate('/joker-playground'); // Replace with your actual route
            }
        }, 5000); // Every 5 seconds
        
        return () => {
            clearInterval(clownInterval);
        };
    }, [navigate]);

    useEffect(() => {
        animateBalloons();
        const interval = setInterval(animateBalloons, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`clown-page ${isFlipped ? 'flipped' : ''}`} ref={containerRef}>
            {confettiActive && (
                <div className="confetti">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} className="confetti-piece">🎪</div>
                    ))}
                </div>
            )}

            {showSecretClown && (
                <div id="secret-clown" className="secret-clown">🤡</div>
            )}

            <div className="container">
                <header>
                    <h1>🤡 CLOWN CENTRAL 🤡</h1>
                    <div className="subtitle">Where Laughter Lives Forever!</div>
                    <div className="clown-counter">Clown Count: {clownCount}</div>
                </header>

                <div className="clown-fact">
                    <h2>🎪 Welcome to the Big Top of Fun!</h2>
                    <p>Step right up and discover the wonderful, wacky world of clowns! From ancient jesters to modern entertainers, clowns have been bringing smiles to faces for thousands of years. Get ready for a colorful journey through the most amusing profession on Earth!</p>
                </div>

                <div className="clown-types">
                    <div className="clown-type" onClick={() => {
                        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-clown-horn-628.mp3');
                        audio.play();
                    }}>
                        <span className="clown-emoji">🤡</span>
                        <h3>Classic Clown</h3>
                        <p>The traditional red nose, big shoes, and colorful outfit! These clowns love juggling, balloon animals, and making everyone giggle with their silly antics.</p>
                    </div>
                    <div className="clown-type" onClick={() => {
                        document.body.style.filter = 'hue-rotate(180deg)';
                        setTimeout(() => {
                            document.body.style.filter = '';
                        }, 1000);
                    }}>
                        <span className="clown-emoji">🎭</span>
                        <h3>Mime Artist</h3>
                        <p>Silent but hilarious! These performers use exaggerated movements and invisible props to create magical moments that speak louder than words.</p>
                    </div>
                    <div className="clown-type" onClick={() => {
                        document.querySelectorAll('p').forEach(p => {
                            p.style.fontFamily = 'Comic Sans MS, cursive';
                        });
                    }}>
                        <span className="clown-emoji">🃏</span>
                        <h3>Comedy Jester</h3>
                        <p>The wise fool who entertains with wit, wordplay, and clever tricks. They're the masters of turning everyday situations into comedy gold!</p>
                    </div>
                </div>

                <div className="fun-facts">
                    <h2>🎈 Amazing Clown Facts!</h2>
                    <ul>
                        <li>The word "clown" comes from the word "clod," meaning a bumbling peasant</li>
                        <li>Ronald McDonald is officially the world's most famous clown</li>
                        <li>Clown shoes are typically size 14-22, much bigger than most people's feet!</li>
                        <li>The red nose tradition started in the 1860s to make clowns more visible in large circus tents</li>
                        <li>Professional clowns often spend years perfecting their unique character and makeup</li>
                        <li>Balloon twisting (making balloon animals) became popular in the 1950s</li>
                        <li>Many famous comedians started their careers as clowns</li>
                    </ul>
                </div>

                <div className="interactive-section">
                    <h2>🎪 Interactive Fun Zone!</h2>
                    <button className="honk-button" onClick={playHonk}>
                        {honkCount >= 10 ? 'STOP HONKING! 🤯' : 'HONK THE NOSE! 📯'}
                    </button>
                    <button className="honk-button" onClick={showJoke}>
                        TELL ME A JOKE! 😂
                    </button>
                </div>

                <div className="joke-section">
                    <h2>🎭 Clown Jokes Corner</h2>
                    <div className="joke">{jokes[currentJoke]}</div>
                </div>

                <div className="clown-fact">
                    <h2>🌟 The Magic of Laughter</h2>
                    <p>Clowns remind us that laughter is the best medicine! They teach us not to take life too seriously and show us that it's okay to be silly sometimes. Whether they're juggling, telling jokes, or just making funny faces, clowns bring out the child in all of us. So the next time you see a clown, don't forget to smile – you might just make their day too!</p>
                </div>

                <footer>
                    <p>🎪 Keep Smiling and Stay Silly! 🎪</p>
                    <p>Remember: Life's too short not to laugh!</p>
                </footer>
            </div>

            {/* Floating balloons */}
            <div className="balloon" style={{ left: '5%', top: '20%', animationDelay: '-1s' }}>🎈</div>
            <div className="balloon" style={{ left: '85%', top: '40%', animationDelay: '-3s' }}>🎈</div>
            <div className="balloon" style={{ left: '15%', top: '70%', animationDelay: '-5s' }}>🎈</div>
            <div className="balloon" style={{ right: '10%', top: '15%', animationDelay: '-2s' }}>🎈</div>
        </div>
    );
};

export default ClownPage;