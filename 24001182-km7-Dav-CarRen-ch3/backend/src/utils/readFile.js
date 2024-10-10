const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "../../netlify/functions/data/cars.json");

const readData = () => {
  const jsonData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(jsonData);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");
};

module.exports = { readData, writeData };
