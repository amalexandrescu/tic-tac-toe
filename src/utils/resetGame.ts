export const resetGame = async (onSuccess?: () => void) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/reset`, {
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
