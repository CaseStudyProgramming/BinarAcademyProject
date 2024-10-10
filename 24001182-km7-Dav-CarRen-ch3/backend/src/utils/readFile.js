const path = require("path");
const fs = require("fs");

const dataPath = path.join(process.cwd(), "public/data/cars.json");

const readData = () => {
  console.log("Trying to read file from path:", dataPath); // Log the file path
  const jsonData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(jsonData);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
