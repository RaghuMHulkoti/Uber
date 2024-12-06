const mongoose = require('mongoose');
const bcrypt = require('bcrypt') // Import bcrypt to hash and compare passwords
const jwt = require('jsonwebtoken') // Import jsonwebtoken to generate and verify JWTs

const captainSchema=new mongoose.Schema({
    fullName: { // fullName sub-document containing firstName and lastName
        firstName: {
            type: String, // First name is a string
            required: true, // First name is required
            minlength: [3, "Enter at least 3 characters"] // Minimum length of 3 characters
        },
        lastName: {
            type: String, // Last name is a string
            minlength: [3, "Enter at least 3 characters"] // Minimum length of 3 characters
        }
    },
    email: {
        type: String, // Email is a string
        required: true, // Email is required
        unique: true, // Email must be unique in the database
        minlength: [3, "Enter at least 3 characters"] // Minimum length of 3 characters
    },
    password: {
        type: String, // Password is a string
        required: true, // Password is required
        select: false, // Do not include password in queries by default
    },
    socketId: {
        type: String, // Optional socket ID to store user's socket connection ID
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minLength:[3,'color must be aleast 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minLength:[3,'plate must be aleast 3 characters'],
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"capacity must be aleast 1"],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['motocycle','car','auto']

        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        } 
    }


})
captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY,{expiresIn:'24h'}) // Sign the token with user ID and secret key
    return token; // Return the generated token
}

// Instance method to compare input password with the hashed password in the database
captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password) // Compare hashed password with the stored password
}

// Static method to hash a plain password before saving to the database
captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10); // Hash the password with 10 salt rounds
};

const captainModel = mongoose.model('captain', captainSchema);

module.exports =captainModel;