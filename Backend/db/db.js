const mongoose = require('mongoose');

// dbConnection function to establish a connection to the MongoDB database
function dbConnection() {
    // Attempt to connect to MongoDB using the connection string from the environment variable
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Connected to db'); // Log a success message upon successful connection
        })
        .catch(err => {
            // Log the error message if there is an issue with the connection
            console.error('Error connecting to db:', err);
            process.exit(1); // Exit the process in case of a critical database connection failure
        });
}

module.exports = dbConnection;
