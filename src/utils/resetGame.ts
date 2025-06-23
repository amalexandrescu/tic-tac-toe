export const resetGame = async (onSuccess?: () => void) => {
  const res = await fetch("http://localhost:3001/reset", {
    method: "POST",
  });

  const data = await res.json();
  if (!data.success) {
    alert("Reset failed");
    return;
  }

  if (onSuccess) {
    onSuccess();
  }
};
