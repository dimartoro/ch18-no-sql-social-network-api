const { ObjectId } = require('mongoose').Types;
const {User} = require('../models');

// Aggregate function to get the number of users overall
const usersCount = async () => {
  const numberOfUsers = await User.aggregate()
    .count('userCount');
  return numberOfUsers;
}

// Aggregate function to get the number of friends overall
const friendsCount = async (sender)=> {
  const numberOfFriends = sender.friends.length;
  return numberOfFriends;
}

// Aggregate function to get the number of thougths overall
const thoughtsCount = async (sender)=> {
  const numberOfThoughts = sender.thoughts.length;
  return numberOfThoughts;
}

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      const usersObj = {
        users,
        usersCount: await usersCount()
      };
      res.json(usersObj);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add friends
  async addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: {_id:req.params.friendId}} }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Add thought
  async addThought(req, res) {
    console.log('You are adding a thought');
    console.log(req.body);
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { thoughts: {_id:req.params.thoughtId} } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v').populate("friends").populate("thoughts");

      if (!user) {
        return res.status(404).json({ message: 'No User with that ID' });
      }

      const userObj = {
        user,
        friendsCount: await friendsCount(user),
        thoughtsCount: await thoughtsCount(user)
      };

      res.json(userObj);

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }
      res.json({ message: 'User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
