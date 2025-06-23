import BoardGame from "./components/GameBoard";
import GameSummary from "./components/GameSummary";
import RegisterPlayer from "./components/RegisterPlayer";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[lavender] flex justify-center">
      <div className="flex-col justify-center items-start w-[700px]">
        <div className="text-xl font-bold text-center pt-[100px]">
          Tic Tac Toe
        </div>
        <div className="flex  bg-[whitesmoke] mt-[100px] p-[50px] rounded-[10px] justify-between">
          <GameSummary />
          <BoardGame />
        </div>
      </div>
    </div>
  );
}

export default App;
