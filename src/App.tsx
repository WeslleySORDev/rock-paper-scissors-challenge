const POSSIBLE_MOVES = [
  {
    name: "paper",
    image_path: "/assets/images/icon-paper.svg",
    wins: ["rock", "spock"],
    loses: ["scissors", "lizard"],
  },
  {
    name: "scissors",
    image_path: "/assets/images/icon-scissors.svg",
    wins: ["paper", "lizard"],
    loses: ["spock", "rock"],
  },
  {
    name: "rock",
    image_path: "/assets/images/icon-rock.svg",
    wins: ["scissors", "lizard"],
    loses: ["spock", "paper"],
  },
  {
    name: "spock",
    image_path: "/assets/images/icon-spock.svg",
    wins: ["scissors", "rock"],
    loses: ["lizard", "paper"],
  },
  {
    name: "lizard",
    image_path: "/assets/images/icon-lizard.svg",
    wins: ["spock", "paper"],
    loses: ["scissors", "rock"],
  },
];

export default function App() {
  return (
    <div className="flex flex-col h-screen pt-8 pb-14 px-8">
      <header className="flex items-center justify-between border-2 border-[hsl(217,_16%,_45%)] rounded-sm p-2.5">
        <div className="font-bold py-2.5 pl-3 h-[92px]">
          <p>ROCK</p>
          <p className="-translate-y-3">PAPER</p>
          <p className="-translate-y-6">SCISSORS</p>
          <p className="-translate-y-9">LIZARD</p>
          <p className="-translate-y-12">SPOCK</p>
        </div>
        <div className="flex flex-col items-center justify-center h-[102px] w-[102px] rounded-sm bg-white ">
          <p className="text-[hsl(229,_64%,_46%)]">SCORE</p>
          <p className="text-[hsl(229,_25%,_31%)] text-4xl font-bold">12</p>
        </div>
      </header>
      <main className="mt-[150px]">
      </main>
      <footer className="flex items-center justify-center mt-auto">
        <button className="flex border-2 border-[hsl(217,_16%,_45%)] rounded-xl px-10 py-3 font-semibold tracking-[0.2em]">
          RULES
        </button>
      </footer>
    </div>
  );
}
