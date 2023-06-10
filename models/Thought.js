var moment = require('moment');
const { Schema, model, default: mongoose } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    reactions: [reactionSchema],
    createdAt: {
      type:String
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

thoughtSchema.pre('save',function(next){
  this.createdAt = moment(this.createdAt).format('MM-DD-YYYY');
  next();
});

const Thought = model('thought', thoughtSchema);
module.exports = Thought;
