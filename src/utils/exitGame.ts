export const exitGame = async () => {
  const result = await fetch(`${process.env.REACT_APP_API_URL}/exit`, {
    method: "POST",
  });

  const data = await result.json();

  if (!data.success) {
    alert("Exit failed");
    return;
  }

  return data;
};
