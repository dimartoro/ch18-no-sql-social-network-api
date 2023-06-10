const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];
  const usedNames = [];

  // Loop 10 times -- add users to the users array
  for (let i = 0; i < 10; i++) {
    var isNewUser = false;
    var username = "";
    while(isNewUser == false){
      var uniqueUser = getRandomName();
      if(usedNames.includes(uniqueUser)){
        isNewUser = false;
      }else{
        usedNames.push(uniqueUser);
        username = uniqueUser;
        isNewUser = true;
      }
    }
    
    var email = `${username}@gmail.com`;
    users.push({
      username,
      email
    });
  }

  const thoughts = [];

  // Loop 20 times -- add thoughts to the thoughts array
  for (let i = 0; i < 20; i++) {

    const thoughtText = getRandomThought();
    const username = getRandomName();
    //get 3 random reactions to add to the reactions array on thoughts
    const reactions = getRandomReactions(2);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const createdAt =  today.toLocaleDateString();
    
    thoughts.push({
      thoughtText,
      username,
      reactions,
      createdAt
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
