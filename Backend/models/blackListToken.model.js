const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the time when the document is created
    expires: 86400, // TTL in seconds (24 hours = 86400 seconds)
  },
});

// Create a model for the schema
const BlacklistedToken = mongoose.model("BlacklistedToken", blacklistedTokenSchema);

module.exports = BlacklistedToken;
