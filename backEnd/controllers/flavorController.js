const Flavor = require("../models/flavor")

//GET all flavors
const getFlavors = async(req, res) => {
    try{
    const flavors = await Flavor.distinct("flavorName")
    res.status(200).json(flavors)
} catch (error) {
    throw error;
  }
}

//GET all categories

const getCategories = async(req, res) => {
    try {
    const categories = await Flavor.distinct("category")
    res.status(200).json(categories)
} catch (error) {
    throw error;
  }
}

//GET all flavors in a category
const getFlavorsByCategory = async (req, res) => {
  const category = req.params.category;
  console.log(category)
    try {
      const flavors = await Flavor.find({ category: category }, 'flavorName');
      res.status(200).json(flavors)
    } catch (error) {
      throw error;
    }
  }

  module.exports = {
    getFlavors,
    getCategories,
    getFlavorsByCategory
  }