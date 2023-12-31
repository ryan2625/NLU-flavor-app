const Review = require('../models/review');

/**
 * Review Controller
 * 
 * Controller functions for handling reviews in the database. Contains a 
 * GET request that returns the newest created reviews first, and a POST request
 * that creates new reviews in the database. 
 *
 */

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({createdAt: -1});
    res.status(200).json(reviews);
  } catch (error) {
    throw error;
  }
};

const createReviews = async (req, res) => {
    try{
        const review = await Review.create(req.body);
        res.status(200).json(review);
    } catch( error) {
        throw error;
    }
}

module.exports = {
  getReviews,
  createReviews
};
