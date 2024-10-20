const express = require('express');
const { check, validationResult } = require('express-validator');
const { faker, th } = require('@faker-js/faker');

const router = express.Router();

const Place = require('../models/places');
const { createUserValidation, userLoginValidation } = require('../validations/users');

// Function to fetch random images from Unsplash API with a "places" query
async function getRandomPlaceImage() {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=places&count=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch image');
  } else {
    const data = await response.json();
    return data.urls; // Return the regular-sized image URL
  }
}

router.get(
  '/',
  async (req, res) => {




    try {

      const placesPromises = Array.from({ length: 10 }).map(async (_, id) => {
        try {
          const imageUrl = await getRandomPlaceImage(); // Wait for the image URL to be fetched
          return {
            id: id + 1,
            name: faker.location.city(), // Random city name + 'Landmark'
            description: faker.lorem.sentence(), // Random description
            image: imageUrl, // Fetched image URL
            visited: false, // Default to false
          };
        } catch (err) {
          console.error(err.message);
          return {
            id: id + 1,
            name: faker.location.city(), // Random city name + 'Landmark'
            description: faker.lorem.sentence(), // Random description
            image: faker.image.url(500, 500, 'landmark'), // Fetched image URL
            visited: false, // Default to false
          };
        }

      });

      const places = await Promise.all(placesPromises); // Resolve all promises
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Max-Age", "1800");
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
      res.json(places);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  }
);
router.get(
  '/suggested-places',
  async (req, res) => {




    try {

      const placesPromises = Array.from({ length: 10 }).map(async (_, id) => {
        try {
          const imageUrl = await getRandomPlaceImage(); // Wait for the image URL to be fetched
          return {
            id: id + 1,
            name: faker.location.city(), // Random city name + 'Landmark'
            description: faker.lorem.sentence(), // Random description
            image: imageUrl, // Fetched image URL
          };
        } catch (err) {
          console.error(err.message);
          return {
            id: id + 1,
            name: faker.location.city(), // Random city name + 'Landmark'
            description: faker.lorem.sentence(), // Random description
            image: faker.image.url(500, 500, 'landmark'), // Fetched image URL
          };
        }

      });

      const places = await Promise.all(placesPromises); // Resolve all promises
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Max-Age", "1800");
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
      res.json(places);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  }
);
module.exports = router;
