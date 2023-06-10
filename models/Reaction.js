var moment = require('moment');
const { Schema, Types } = require('mongoose');

// Schema to create a Reaction / this won't be a model, but rather will be used as the 
//reaction field's subdocument schema in the Thought model.
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
  //This will use the package moment to define the format of the date. 
  this.createdAt = moment(this.createdAt).format('MM-DD-YYYY');
  next();
});

//exports schema
module.exports = reactionSchema;
