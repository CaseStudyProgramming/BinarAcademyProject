// root/src/services/carService.js
const carRepository = require("../repositories/carRepository");

class CarService {
  getAllCars() {
    try {
      return carRepository.getAllCars();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getCarById(id) {
    try {
      return carRepository.getCarById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  createCar(carData) {
    try {
      return carRepository.createCar(carData);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  updateCar(id, carData) {
    try {
      return carRepository.updateCar(id, carData);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  deleteCar(id) {
    try {
      return carRepository.deleteCar(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new CarService();
