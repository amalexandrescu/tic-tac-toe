export const register = async (
  name: string
): Promise<{ playerId: number } | { error: string }> => {
  try {
    const res = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.log("errorData from registration: ", errorData);
      return { error: errorData.error || "Registration failed" };
    }

    const data = await res.json();
    return { playerId: data.playerId };
  } catch (error) {
    console.error("Error during player registration: ", error);
    return { error: "Network error or server unreachable" };
  }
};
