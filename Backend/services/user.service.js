const userModel = require("../models/user.model"); // Import the user model to interact with the MongoDB collection

// Export the createUser function to be used in other parts of the application
module.exports.createUser = async ({
    firstName, lastName, email, password
}) => {
    // Check if firstName, email, or password is missing, throw an error if any required field is missing
    if (!firstName || !email || !password) {
        throw new Error("All fields are required"); // Custom error message when fields are missing
    }

    // Create a new user document in the database using the user model
    const user = await userModel.create({
        fullName: {
            firstName, // Set the first name from the input
            lastName // Set the last name from the input
        },
        email, // Set the email from the input
        password // Set the password from the input
    });

    return user; // Return the newly created user document
};
