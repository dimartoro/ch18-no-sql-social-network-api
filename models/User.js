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
      required: true,
      unique:true,
      max_length: 100,
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
