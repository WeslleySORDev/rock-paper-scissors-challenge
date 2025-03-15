const POSSIBLE_MOVES = [
  {
    name: "paper",
    image_path: "/assets/images/icon-paper.svg",
    wins: ["rock", "spock"],
    loses: ["scissors", "lizard"]
  },
  {
    name: "scissors",
    image_path: "/assets/images/icon-scissors.svg",
    wins: ["paper", "lizard"],
    loses: ["spock", "rock"]
  },
  {
    name: "rock",
    image_path: "/assets/images/icon-rock.svg",
    wins: ["scissors", "lizard"],
    loses: ["spock", "paper"]
  },
  {
    name: "spock",
    image_path: "/assets/images/icon-spock.svg",
    wins: ["scissors", "rock"],
    loses: ["lizard", "paper"]
  },
  {
    name: "lizard",
    image_path: "/assets/images/icon-lizard.svg",
    wins: ["spock", "paper"],
    loses: ["scissors", "rock"]
  }
]

export default function App() {
  return (
    <>
      <main>
        <h1>CLEAR</h1>
      </main>
      <footer className="">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  );
}
