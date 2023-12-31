const Flavor = require('../models/flavor');

/**
 * Flavor Controller
 *
 * This module provides controller functions for handling flavors and categories in the database.
 * It includes functions for getting all flavors, getting all categories, and getting flavors by category.
 * 
 */

// GET all flavors... I don't believe this function is ever used in the project, but its here if you want to use postman or another tool
/// to see all the flavors in the database.

const getFlavors = async (req, res) => {
  try {
    const flavors = await Flavor.distinct('flavorName');
    res.status(200).json(flavors);
  } catch (error) {
    throw error;
  }
};

// GET all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Flavor.distinct('category');
    res.status(200).json(categories);
  } catch (error) {
    throw error;
  }
};

// GET all flavors in a category
const getFlavorsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const flavors = await Flavor.find({ category: category }, 'flavorName');
    res.status(200).json(flavors);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getFlavors,
  getCategories,
  getFlavorsByCategory,
};
