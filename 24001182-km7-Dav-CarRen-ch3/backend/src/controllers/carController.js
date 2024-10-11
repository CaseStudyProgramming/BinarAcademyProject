// src/controllers/carController.js
const carService = require("../services/carService");
const imagekit = require("../configs/imageKit");

exports.ping = (req, res) => {
  res.json({ message: "ping successfully" });
};

exports.getAllCars = (req, res, next) => {
  try {
    const cars = carService.getAllCars();
    res.json(cars);
  } catch (error) {
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
        file: file.data.toString("base64"), // Convert image to base64
        fileName: file.name,
      });
      imageUrl = uploadResult.url;
    }

    const newCar = carService.createCar({
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
      options,
      specs,
    });

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

    // Fetch the existing car
    const car = carService.getCarById(carId);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Check if a new image is provided in the request
    if (req.files && req.files.image) {
      // If there’s an old image, delete it from ImageKit using its fileId
      if (car.imageFileId) {
        await imagekit.deleteFile(car.imageFileId);
      }

      // Upload the new image to ImageKit
      const newImageFile = req.files.image;
      const uploadResult = await imagekit.upload({
        file: newImageFile.data.toString("base64"), // Convert image to base64
        fileName: newImageFile.name,
      });

      // Update the image URL and fileId in carData
      carData.image = uploadResult.url;
      carData.imageFileId = uploadResult.fileId; // Store fileId for future deletions
    }

    // Update car data in the JSON
    const updatedCar = carService.updateCar(carId, carData);
    res.status(200).json(updatedCar);
  } catch (error) {
    next({ status: 400, message: "Failed to update car" });
  }
};

exports.deleteCar = (req, res, next) => {
  try {
    const deleted = carService.deleteCar(req.params.id);
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    next({ status: 404, message: error.message });
  }
};
