// root/src/controllers/carController.js
const carService = require("../services/carService");
const imagekit = require("../configs/imageKit");

exports.ping = (req, res) => {
  res.json({ message: "ping successfully" });
};

exports.getAllCars = (req, res, next) => {
  try {
    const cars = carService.getAllCars();
    console.log(cars); // Log to check what is being returned
    res.json(cars);
  } catch (error) {
    console.error(error); // Log the error
    next({ status: 500, message: "Failed to retrieve cars" });
  }
};

exports.getCarById = (req, res, next) => {
  try {
    const car = carService.getCarById(req.params.id);
    res.json(car);
  } catch (error) {
    next({ status: 404, message: error.message });
  }
};

exports.createCar = async (req, res, next) => {
  try {
    const {
      plate,
      manufacture,
      model,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission,
      available,
      type,
      year,
      options,
      specs,
    } = req.body;

    // Handle image upload with ImageKit
    let imageUrl = "";
    if (req.files && req.files.image) {
      const file = req.files.image;
      const uploadResult = await imagekit.upload({
        file: file.data.toString("base64"),
        fileName: file.name,
      });
      imageUrl = uploadResult.url;
    }

    // Add new car data
    const newCar = {
      id: uuidv4(),
      plate,
      manufacture,
      model,
      image: imageUrl,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission,
      available,
      type,
      year,
      options: options ? options.split(",").map((option) => option.trim()) : [],
      specs: specs ? specs.split(",").map((spec) => spec.trim()) : [],
    };

    // Read current cars from JSON
    const cars = carService.getAllCars();

    // Add the new car to the data and write it to the file
    cars.push(newCar);
    carService.writeData(cars);

    res.status(201).json(newCar);
  } catch (error) {
    next({ status: 400, message: "Failed to create car" });
  }
};

// src/controllers/carController.js
exports.updateCar = async (req, res, next) => {
  try {
    const carId = req.params.id;
    const carData = req.body;

    // Convert `options` and `specs` to arrays if they are provided
    if (carData.options) {
      carData.options = carData.options
        .split(",")
        .map((option) => option.trim());
    }
    if (carData.specs) {
      carData.specs = carData.specs.split(",").map((spec) => spec.trim());
    }

    // Fetch existing cars
    const cars = carService.getAllCars();
    const carIndex = cars.findIndex((car) => car.id === carId);

    if (carIndex === -1) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Update car data
    const updatedCar = { ...cars[carIndex], ...carData };

    // Update the image if provided
    if (req.files && req.files.image) {
      const newImageFile = req.files.image;
      const uploadResult = await imagekit.upload({
        file: newImageFile.data.toString("base64"),
        fileName: newImageFile.name,
      });

      updatedCar.image = uploadResult.url;
    }

    // Update the cars array and write the changes to the file
    cars[carIndex] = updatedCar;
    carService.writeData(cars);

    res.status(200).json(updatedCar);
  } catch (error) {
    next({ status: 400, message: "Failed to update car" });
  }
};

exports.deleteCar = (req, res, next) => {
  try {
    const carId = req.params.id;

    // Get all cars
    let cars = carService.getAllCars();
    const carIndex = cars.findIndex((car) => car.id === carId);

    if (carIndex === -1) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Remove the car from the list
    cars = cars.filter((car) => car.id !== carId);

    // Write the updated list back to the file
    carService.writeData(cars);

    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    next({ status: 404, message: "Failed to delete car" });
  }
};
