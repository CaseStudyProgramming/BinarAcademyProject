//api.js
export const fetchCarData = async () => {
  try {
    const response = await fetch("/data/cars.json");
    if (!response.ok) {
      throw new Error("Failed to fetch car data");
    }
    const data = await response.json();

    // Log fetched data for debugging
    console.log("Car data fetched:", data);

    return data;
  } catch (error) {
    console.error("Error fetching car data:", error);
    return null;
  }
};
