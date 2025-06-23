import { useEffect, useState } from "react";
import { getGameState } from "../utils/getGameState";

export interface IPlayer {
  id: number;
  name: string;
  moveSymbol: string;
}

interface IGameState {
  board: (null | string)[];
  players: { id: number; name: string; moveSymbol: string }[];
  currentTurn: number | null;
  status: "waiting" | "playing" | "finished"; //it can be waiting, playing, finished
  winner: IPlayer | "Draw" | null;
}

export const useGameState = () => {
  const [gameState, setGameState] = useState<IGameState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const playerId = localStorage.getItem("playerId");

  const loadState = async () => {
    try {
      const data = await getGameState();
      setGameState(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load game state");
    }
  };

  useEffect(() => {
    loadState();
    const interval = setInterval(loadState, 2500);

    return () => clearInterval(interval);
  }, []);

  return { gameState, loading, playerId, loadState };
};
