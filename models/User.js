const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
      max_length: 50,
      trim:true
    },
    email: {
      type: String,
      required: [true,"Email is required"],
      unique:[true,"Email is already in use"],
      max_length: 100,
      validate: {
        validator: (v) => {
          //regex to validate an email entry
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
      },
    },
    friends: [{type: Schema.Types.ObjectId,
      ref: 'user',}],
    thoughts: [{type: Schema.Types.ObjectId,
      ref: 'thought',}]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//exports the model. 
const User = model('user', userSchema);
module.exports = User;
