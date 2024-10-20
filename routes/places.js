const express = require('express');
const { check, validationResult } = require('express-validator');
const { faker } = require('@faker-js/faker');

const router = express.Router();

const Place = require('../models/places');
const { createUserValidation, userLoginValidation } = require('../validations/users');

// Function to fetch random images from Unsplash API with a "places" query
async function getRandomPlaceImage() {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=places&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const data = await response.json();
  return data.urls.regular; // Return the regular-sized image URL
}

router.get(
  '/',
  async (req, res) => {




    try {

        const placesPromises = Array.from({ length: 10 }).map(async (_, id) => {
          const imageUrl = await getRandomPlaceImage(); // Wait for the image URL to be fetched
          return {
            id: id + 1,
            name: faker.location.city(), // Random city name + 'Landmark'
            description: faker.lorem.sentence(), // Random description
            image: imageUrl, // Fetched image URL
            visited: false, // Default to false
          };
        });

        const places = await Promise.all(placesPromises); // Resolve all promises
        res.json(places);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
      }
    }
);
module.exports = router;
