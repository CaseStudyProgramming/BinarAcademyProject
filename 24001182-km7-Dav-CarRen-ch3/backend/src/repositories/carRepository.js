// root/src/repositories/carRepository.js
const { readData, writeData } = require("../utils/readFile");
const { v4: uuidv4 } = require("uuid");

class CarRepository {
  getAllCars() {
    try {
      const cars = readData();
      console.log(cars); // Log data from cars.json
      return cars;
    } catch (error) {
      console.error("Error fetching cars:", error);
      throw new Error("Could not retrieve cars");
    }
  }

  getCarById(id) {
    try {
      const car = readData().find((car) => car.id === id);
      if (!car) throw new Error("Car not found");
      return car;
    } catch (error) {
      throw new Error(`Could not retrieve car with ID ${id}`);
    }
  }

  createCar(carData) {
    try {
      const cars = readData();
      const newCar = { id: uuidv4(), ...carData };
      cars.push(newCar);
      writeData(cars);
      return newCar;
    } catch (error) {
      throw new Error("Failed to create a new car");
    }
  }

  updateCar(id, carData) {
    try {
      const cars = readData();
      const carIndex = cars.findIndex((car) => car.id === id);
      if (carIndex === -1) throw new Error("Car not found");

      cars[carIndex] = { ...cars[carIndex], ...carData };
      writeData(cars);
      return cars[carIndex];
    } catch (error) {
      throw new Error(`Could not update car with ID ${id}`);
    }
  }

  deleteCar(id) {
    try {
      let cars = readData();
      const carIndex = cars.findIndex((car) => car.id === id);
      if (carIndex === -1) throw new Error("Car not found");

      cars = cars.filter((car) => car.id !== id);
      writeData(cars);
      return true;
    } catch (error) {
      throw new Error(`Failed to delete car with ID ${id}`);
    }
  }
}

module.exports = new CarRepository();
