var moment = require('moment');
const { Schema, model, default: mongoose } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
    createdAt: {
      type:String
      // type: Date,
      // default: ()=> {Date.now()},
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
