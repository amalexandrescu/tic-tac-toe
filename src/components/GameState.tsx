import { useEffect, useState } from "react";
import { IPlayer, useGameState } from "../hooks/useGameState";
import { exitGame } from "../utils/exitGame";
import { resetGame } from "../utils/resetGame";

const GameState = () => {
  const { gameState, loading, playerId, loadState } = useGameState();
  const [currentPlayer, setCurrentPlayer] = useState<IPlayer | null>(null);
  const [gameResult, setGameResult] = useState<string>("");

  useEffect(() => {
    if (!gameState) return;
    if (gameState.status !== "finished") {
      setGameResult("-");
    } else if (gameState.status === "finished" && gameState.winner === "Draw") {
      setGameResult("It's a draw");
    } else if (currentPlayer) {
      setGameResult(currentPlayer.name);
    } else {
      setGameResult("-");
    }
  }, [gameState?.status, gameState?.winner]);

  useEffect(() => {
    if (!gameState) return;

    // Get current turn player id from game state
    const currentTurnId = gameState.currentTurn;

    if (currentTurnId === null) {
      setCurrentPlayer(null);
      return;
    }
    const player = gameState?.players.find(
      (player) => player.id === gameState.currentTurn
    );
    if (player) setCurrentPlayer(player);
  }, [gameState?.currentTurn]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-[5px]">
      <div>
        {gameState?.players.length ? (
          <>
            <div>
              <span>Players: </span>

              {gameState?.players.map((player, index) => (
                <span key={index}>
                  {player.name} {index < gameState.players.length - 1 && " & "}
                </span>
              ))}
            </div>
          </>
        ) : (
          <div>Waiting players to join</div>
        )}
      </div>
      <div>
        Current turn:{" "}
        {gameState?.status === "playing" ? currentPlayer?.name : "-"}
      </div>
      <div>Game status: {gameState?.status}</div>
      <div>Winner: {gameResult}</div>
      <div className="flex justify-start gap-[20px]">
        <button
          onClick={() => exitGame()}
          className="px-3 py-1 bg-gray-300 hover:bg-purple-300 text-white rounded"
        >
          Exit
        </button>
        <button
          onClick={() => resetGame(loadState)}
          className="px-3 py-1  bg-gray-300 hover:bg-purple-300 text-white rounded"
        >
          {gameState?.status === "finished" ? "Play Again" : "Restart"}
        </button>
      </div>
    </div>
  );
};

export default GameState;
