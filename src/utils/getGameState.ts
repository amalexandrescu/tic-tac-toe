export const getGameState = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/state`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching game state: ", error);
    throw error;
  }
};
