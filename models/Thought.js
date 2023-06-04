const { Schema, model, default: mongoose } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    reactions: [],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username:
      {
        type: String,
        required:true
      },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);
module.exports = Thought;
