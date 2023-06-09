const { ObjectId } = require('mongoose').Types;
const {Thought, Reaction } = require('../models');

// Aggregate function to get the number of thouthts overall
const thougthsCount = async () => {
  const numberOfThoughts = await Thought.aggregate()
    .count('thoughtCount');
  return numberOfThoughts;
}

// Aggregate function to get the number of reactions overall
const reactionCount = async (sender)=> {
  const numberOfReactions = sender.reactions.length;
  return numberOfReactions;
}

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      const thoughtObj = {
        thoughts,
        thougthsCount: await thougthsCount()
      };
      res.json(thoughtObj);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getAllThoughts(req,res){
    try{
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      const thoughtObj = {
        thought,
        reactionCount: await reactionCount(thought)
      };
      res.json(thoughtObj);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({ message: 'thought deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a reaction to a thought
  async addReaction(req, res) {
    console.log('You are adding an reaction');
    console.log(req.body);

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID :(' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove reaction from a thought
  async removeReaction(req, res) {
    console.log("Thought:::",req.params.thoughtId);
    console.log("REaction:::",req.params.reactionId);
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No reaction found with that ID :(' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};