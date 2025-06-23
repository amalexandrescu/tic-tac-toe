export const movePlayer = async (playerId: number, cellIndex: number) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/move`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ playerId, cellIndex }),
  });

  const data = await res.json();
  if (!data.success) alert(data.error);

  return data;
};
