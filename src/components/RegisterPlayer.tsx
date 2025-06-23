import React, { useEffect, useState } from "react";
import { register } from "../utils/registerPlayers";
import { useGameState } from "../hooks/useGameState";

const RegisterPlayer: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>("");
  const [playerId, setPlayerId] = useState<number | null>(null);

  const handleRegisterPlayer = async (name: string) => {
    const result = await register(name);
    if ("playerId" in result) {
      setPlayerId(result.playerId);
      localStorage.setItem("playerId", result.playerId.toString());
    } else {
      alert(`Error: ${result.error}`);
    }
  };

  return (
    <div className="flex gap-[10px] bg-[lavender] p-[10px] rounded-[5px]">
      <input
        type="text"
        placeholder="Player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="p-[5px] border-none rounded-[5px] w-[200px]"
      />
      <button
        onClick={() => {
          handleRegisterPlayer(playerName);
          setPlayerName("");
        }}
        className="bg-[whitesmoke] hover:bg-purple-300 p-[5px] rounded-[5px] "
      >
        Register
      </button>
    </div>
  );
};

export default RegisterPlayer;
