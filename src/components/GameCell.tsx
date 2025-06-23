import React from "react";

interface IGameCellProps {
  value: string | null;
  onClick: () => void;
  disabled?: boolean;
}

const GameCell: React.FC<IGameCellProps> = ({ value, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      // className="h-[80px] w-[80px] border-none rounded-[10px] text-[25px] bg-[lavender] text-gray-500"
      className={`
        h-[80px] w-[80px] rounded-[10px] text-[25px] 
        bg-[lavender] 
        ${
          disabled
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-purple-200 cursor-pointer"
        }
      `}
    >
      {value}
    </button>
  );
};

export default GameCell;
