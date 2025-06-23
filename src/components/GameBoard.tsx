import React from "react";
import GameCell from "./GameCell";
import { useGameState } from "../hooks/useGameState";
import { movePlayer } from "../utils/movePlayer";

const BoardGame: React.FC = () => {
  const { gameState, loading, playerId, loadState } = useGameState();

  const idToNumber = playerId !== null ? parseInt(playerId) : null;

  const handleCellClick = async (index: number) => {
    if (playerId === null) return;

    const idToNumber = parseInt(playerId);
    const result = await movePlayer(idToNumber, index);
    if (result.success) loadState();
  };

  if (loading) return <div>Loading...</div>;
  if (!gameState) return <div>Failed to load game state</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-[80px_80px_80px] gap-[5px]">
        {gameState.board.map((value, index) => (
          <GameCell
            key={index}
            value={value}
            onClick={() => handleCellClick(index)}
            disabled={
              gameState.status !== "playing" ||
              gameState.currentTurn !== idToNumber ||
              gameState.board[index] !== null
            }
          />
        ))}
      </div>
    </div>
  );
};

export default BoardGame;
