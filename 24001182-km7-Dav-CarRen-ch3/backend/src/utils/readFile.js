// root/src/utils/fileUtils.js
const fs = require("fs");
const path = require("path");

const dataPath = path.join(process.cwd(), "public/data/cars.json");

const readData = () => {
  const jsonData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(jsonData);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
