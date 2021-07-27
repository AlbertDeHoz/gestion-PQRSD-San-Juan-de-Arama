const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

let userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      min: 6,
      max: 255
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      min: 6,
      max: 255
    },
    avatar:{
        type: String,
        default: 'http://localhost:5000/uploads/userDef.png'
    },
    password:{
      type: String,
      require: true,
      min: 6,
      max: 1024,
    },
    signupDate:{
        type: Date,
        default: Date.now(),
    },
    login:{
        type: Date, 
    },
    pqrsds:[{
      type: Schema.Types.ObjectId,
      ref: 'Pqrsd',
    }]
  },
  {
    collection: "users",
  }
 );
module.exports = mongoose.model("User", userSchema);