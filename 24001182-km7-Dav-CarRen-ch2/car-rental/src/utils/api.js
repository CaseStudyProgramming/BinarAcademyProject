export const fetchCarData = async () => {
  try {
    const response = await fetch("/data/cars.json"); // Remains the same, but file should be in the public folder
    if (!response.ok) {
      throw new Error("Failed to fetch car data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car data:", error);
    return null;
  }
};
