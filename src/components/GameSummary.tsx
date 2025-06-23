import GameState from "./GameState";
import RegisterPlayer from "./RegisterPlayer";

const GameSummary = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <RegisterPlayer />
      <GameState />
    </div>
  );
};

export default GameSummary;
