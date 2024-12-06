const express = require('express'); // Import express to create the router and handle HTTP requests
const router = express.Router(); // Initialize a new router instance for defining routes
const { body } = require('express-validator'); // Import express-validator to validate incoming request data
const captainController=require('../controllers/captain.controller')

router.post("/register",[
   // Validation for the 'email' field: checks if it is a valid email format
   body('email').isEmail().withMessage('Please enter a valid email'),
    
   // Validation for the 'firstName' field inside 'fullName': checks if the length is at least 3 characters
   body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
   
   // Validation for the 'password' field: checks if the password length is at least 6 characters
   body('password').isLength({ min: 6 }).withMessage('Password length must be at least 6 characters'),
   body('vehicle.color').isLength({min:3}).withMessage('color must be at least 3 characters'),
   body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 characters'),
   body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be at least 1'),
   body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type'),
],captainController.registerCaptain)



module.exports = router;