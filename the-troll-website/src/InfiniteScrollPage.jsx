import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./InfiniteScrollPage.css";

const CONTENT_BLOCKS = [
  {
    title: "Welcome to Never-Ending Nonsense!",
    text: `Buckle up, laugh-seekers! You've just entered the digital dimension where jokes multiply faster than rabbits in springtime. Keep scrolling - we've got enough comedy to last you three lifetimes and a weekend!\n\n*Why did the infinite scroll break up with the webpage? It said their relationship had no end in sight!*`
  },
  {
    title: "Rapid-Fire Riddles",
    text: `What gets wetter as it dries? A towel!\nWhat has keys but no locks? A piano!\nWhat can travel around the world while staying in a corner? A stamp!\nWhat has a head, a tail, but no body? A coin!`
  },
  {
    title: "Animal Comedy Corner",
    text: `A horse walks into a bar. The bartender asks, "Why the long face?"\nWhat do you call a sleeping bull? A bulldozer!\nWhy don't elephants use computers? They're afraid of the mouse!\nWhat do you call a fish wearing a crown? A king fish!`
  },
  {
    title: "Food for Thought (and Laughs)",
    text: `Why did the banana go to the doctor? It wasn't peeling well!\nWhat do you call cheese that isn't yours? Nacho cheese!\nWhy did the cookie go to the doctor? Because it felt crumbly!\nWhat's a vampire's favorite fruit? A blood orange!`
  },
  {
    title: "Technology Troubles",
    text: `Why was the computer cold? It left its Windows open!\nHow do you fix a broken website? With a site-seeing tour!\nWhy did the smartphone need glasses? It lost all its contacts!\nWhat do you call a computer that sings? A Dell!`
  },
  {
    title: "School Days Shenanigans",
    text: `Why did the math book look so sad? Because it had too many problems!\nWhat's a snake's favorite subject? Hiss-tory!\nWhy don't you ever see elephants hiding in trees? Because they're so good at it!\nWhat do you call a bear with no teeth? A gummy bear!`
  },
  {
    title: "Travel Tales",
    text: `Why don't mountains ever get cold? They wear snow caps!\nWhat do you call a grumpy and short-tempered gardener? A snap dragon!\nWhy did the bicycle fall over? It was two-tired!\nWhat do you call a boomerang that doesn't come back? A stick!`
  },
  {
    title: "Job Jokes Galore",
    text: `Why did the scarecrow become a successful businessman? He was outstanding in his field!\nWhat do you call a factory that makes good products? A satisfactory!\nWhy did the baker stop making donuts? He got tired of the hole business!\nWhat do you call a sleeping barber? A naptime specialist!`
  },
  {
    title: "Weather Wackiness",
    text: `What do you call it when it rains chickens and ducks? Fowl weather!\nWhy don't clouds ever get speeding tickets? They're always drifting!\nWhat's worse than raining cats and dogs? Hailing taxi cabs!\nHow do hurricanes see? With one eye!`
  },
  {
    title: "Space-tacular Humor",
    text: `Why didn't the sun go to college? Because it already had a million degrees!\nWhat do you call an alien that can sing? A rock-et star!\nHow do you organize a space party? You planet!\nWhy didn't the astronaut come home to his wife? He needed some space!`
  },
  {
    title: "Music Madness",
    text: `What's a skeleton's favorite instrument? The trom-bone!\nWhy did the music teacher need a ladder? To reach the high notes!\nWhat do you call a musical insect? A hum-bug!\nWhy was the piano student arrested? For fingering A minor!`
  },
  {
    title: "Sports Spectacular",
    text: `Why do fish avoid playing basketball? They're afraid of the net!\nWhat do you call a dinosaur that plays soccer? A dino-score!\nWhy don't basketball players go on vacation? They'd get called for traveling!\nWhat's a golfer's favorite type of music? Swing!`
  },
  {
    title: "Family Fun Facts",
    text: `Why don't parents trust stairs? Because they're always up to something!\nWhat did the baby corn say to the mama corn? Where's popcorn!\nWhy did the kid throw butter out the window? To see a butterfly!\nWhat do you call a fake dad? A faux-pa!`
  },
  {
    title: "Medical Mirth",
    text: `Why did the doctor carry a red pen? In case they needed to draw blood!\nWhat do you call a doctor who fixes websites? A URLologist!\nWhy did the thermometer go to school? To get more degrees!\nWhat's the best thing about deadly diseases? They're all cure-ious!`
  },
  {
    title: "Fashion Funnies",
    text: `What do you call a belt made of watches? A waist of time!\nWhy did the sock go to therapy? It had too many holes in its story!\nWhat do you call a shoe made from a banana? A slipper!\nWhy don't pants ever get lonely? They come in pairs!`
  },
  {
    title: "Holiday Hilarity",
    text: `Why was the Christmas tree bad at knitting? It kept dropping its needles!\nWhat do you call a Halloween monster who makes mistakes? A grave error!\nWhy don't Easter eggs ever tell jokes? They'd crack up!\nWhat's a ghost's favorite day of the week? Moan-day!`
  },
  {
    title: "Money Matters",
    text: `Why don't dollar bills ever get tired? Because they're always changing hands!\nWhat do you call a rich fish? Gold-fish!\nWhy did the penny break up with the nickel? It felt like small change!\nWhat's a pirate's favorite letter? You'd think it's R, but it's the C!`
  },
  {
    title: "Transportation Ticklers",
    text: `Why don't cars ever get tired? They have spare wheels!\nWhat do you call a train carrying bubblegum? A chew-chew train!\nWhy did the boat go to therapy? It had anchor management issues!\nWhat do you call a sleeping motorcycle? A Honda-nap!`
  },
  {
    title: "Color Comedy",
    text: `What's a ghost's favorite color? Boo-blue!\nWhy was the math book feeling blue? It had the blues-ical problems!\nWhat do you call a sad strawberry? A blue-berry!\nWhy don't colors ever fight? They know how to blend in!`
  },
  {
    title: "Time for More Time Jokes",
    text: `Why did the clock go to therapy? It had too many ticks!\nWhat do you call a clock that's always hungry? A lunch-time special!\nWhy don't watches ever get stressed? They take things second by second!\nWhat's a calendar's favorite music? Date-night serenades!`
  },
  {
    title: "Bathroom Humor (Keep It Clean!)",
    text: `Why did the toilet paper roll down the hill? To get to the bottom!\nWhat do you call a bathroom superhero? Flush Gordon!\nWhy don't toilets ever tell secrets? Everything comes out eventually!\nWhat's a plumber's favorite vegetable? Leeks!`
  },
  {
    title: "Garden Giggles",
    text: `What do you call a grumpy gardener? A snap dragon!\nWhy don't flowers ever get speeding tickets? They always stop and smell the roses!\nWhat's a tree's favorite drink? Root beer!\nWhy did the gardener plant light bulbs? He wanted to grow a power plant!`
  },
  {
    title: "Ocean of Opportunities",
    text: `What do you call a fish that needs help with vocals? Auto-tuna!\nWhy don't fish pay attention in school? Because they're below sea level!\nWhat do you call a lazy crayfish? A slobster!\nWhy don't sharks ever pay for dinner? Because they're always fishing for compliments!`
  },
  {
    title: "Construction Comedy",
    text: `Why did the hammer go to therapy? It was having a breakdown!\nWhat do you call a sleeping construction worker? A bulldozer operator!\nWhy don't screwdrivers ever get dizzy? They're used to going in circles!\nWhat's a carpenter's favorite dessert? Sawdust cake!`
  }]
  

export default function InfiniteScrollPage() {
  const [items, setItems] = useState(CONTENT_BLOCKS.slice(0, 5));
  const [buttonPosition, setButtonPosition] = useState("top-right");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const containerRef = useRef(null);
  const indexRef = useRef(5);
  const navigate = useNavigate();

  // Hide scroll indicator after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isLoading) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

      // Show scroll indicator when user starts scrolling
      if (scrollTop > 50) {
        setShowScrollIndicator(false);
      }

      // Load more content when near bottom
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setIsLoading(true);
        
        // Simulate loading delay for better UX
        setTimeout(() => {
          setItems((prev) => {
            const nextBatch = [];
            for (let i = 0; i < 3; i++) { // Reduced to 3 for better performance
              nextBatch.push(
                CONTENT_BLOCKS[indexRef.current % CONTENT_BLOCKS.length]
              );
              indexRef.current++;
            }
            return [...prev, ...nextBatch];
          });
          setIsLoading(false);
        }, 800); // Short delay for better UX
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  // Start at the top
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  // Exit button position switcher
  useEffect(() => {
    const positions = ["top-right", "bottom-left", "top-left", "bottom-right"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % positions.length;
      setButtonPosition(positions[index]);
    }, 5000);
    return () => clearTimeout(interval);
  }, []);

  // Handle exit
  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="infinite-container" ref={containerRef}>
      <button
        className={`exit-button ${buttonPosition}`}
        onClick={handleExit}
      >
        Exit
      </button>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <p>Scroll down for more laughs!</p>
        </div>
      )}

      {/* Loading indicator */}
      {isLoading && (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <p>Loading more jokes...</p>
        </div>
      )}

      <div className="header-content">
        <h1>Infinite Jokes Scroll! 😂</h1>
        <p className="subtitle">Keep scrolling for endless laughter - no escape!</p>
      </div>

      <div className="items-list">
        {items.map((block, idx) => (
          <div key={idx} className="item-card">
            <h2>{block.title}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{block.text}</p>
            <div className="joke-indicator">😂</div>
          </div>
        ))}
      </div>

      {/* Back to top button */}
      <button 
        className="back-to-top"
        onClick={() => {
          if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        ↑ Top
      </button>
    </div>
  );
}