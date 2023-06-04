const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      //unique:true,
      max_length: 50,
      //trim:true
    },
    email: {
      type: String,
      required: [true,"Email is required"],
      unique:[true,"Email is already in use"],
      max_length: 100,
      validate: {
        validator: (v) => {
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

const User = model('user', userSchema);
module.exports = User;
