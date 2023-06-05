var moment = require('moment');
const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId:{
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type:String
      // type: Date,
      // default: ()=> {Date.now()},
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

reactionSchema.pre('save',function(next){
  this.createdAt = moment(this.createdAt).format('MM-DD-YYYY');
  next();
});

module.exports = reactionSchema;
