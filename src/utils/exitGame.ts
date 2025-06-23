export const exitGame = async () => {
  const result = await fetch("http://localhost:3001/exit", {
    method: "POST",
  });

  const data = await result.json();

  if (!data.success) {
    alert("Exit failed");
    return;
  }

  return data;
};
