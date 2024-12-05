const { validationResult } = require('express-validator'); // Import validationResult to handle validation errors
const userModel = require('../models/user.model'); // Import the user model
const userService = require('../services/user.service'); // Import user-related services

module.exports.registerUser = async (req, res, next) => {
    // Validate the request body using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If validation errors exist, return a 400 Bad Request response with the error details
        return res.status(400).json({ message: errors.array() });
    }

    // Extract required fields from the request body
    const { fullName, email, password } = req.body;
    console.log(req.body); // Log the request body (useful for debugging)

    // Hash the password using the static method defined in the user model
    const hashedPassword = await userModel.hashPassword(password);

    // Create a new user using the userService, passing required fields
    const user = await userService.createUser({
        firstName: fullName.firstName, // Extract firstName from the fullName object
        lastName: fullName.lastName,  // Extract lastName from the fullName object
        email,
        password: hashedPassword, // Use the hashed password instead of the plain text password
    });

    // Generate a JSON Web Token (JWT) for the newly created user
    const token = user.generateAuthToken();

    // Respond with a 201 Created status, sending the token and user data
    res.status(201).json({ token, user });
};
