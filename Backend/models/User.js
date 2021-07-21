const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    dependencia: {
      type: Number,
    },
    avatar:{
        type: String,
    },
    password:{
        type: String,
        select: false
    },
    signupDate:{
        type: Date,
        default: Date.now(),
    },
    login:{
        type: Date, 
    }
  },
  {
    collection: "students",
  }
);
userSchema.pre('save', (next) => {
    let user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) =>{
        if (err) return next(err)
        bcrypt.hash(user.password, salt, null, (err, hash) =>{
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.gravatar = function (){
    if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

    const md5 = crypto.createHash('md5'). update(this.email).digest('hex');
    return `https://gavatar.com/avatar/${md5}?s=200&d=retro`
}
module.exports = mongoose.model("User", userSchema);