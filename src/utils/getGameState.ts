export const getGameState = async () => {
  try {
    const res = await fetch("http://localhost:3001/state");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching game state: ", error);
    throw error;
  }
};
