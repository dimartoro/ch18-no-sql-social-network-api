const names = [
  'Analia',
  'Adam',
  'Eliana',
  'Rafael',
  'Mateo',
  'Alyne',
  'Ashley',
  'Greg',
  'Alex',
  'Mariana',
  'Juan',
  'Miguel',
  'Arley',
  'Raul',
  'Andres',
  'Luz',
  'Ruby',
  'Leon',
  'Mica',
  'Eva',
  'Lina',
  'Mike',
  'Olive',
  'Magnolia',
  'Arley',
  'Monica',
  'Dinora',
  'Leandro',
  'Dore',
];

const appDescriptions = [
  'Cloud Computing and cloud services',
  'Artificial Intelligence in Machines',
  'Automatic number plate recognition',
  'Artificial intelligence language models – GPT3, GPT4',
  'Brain-controlled car for the disabled using artificial intelligence',
  'Brain Computer Interface (BCI)',
  'Augmented Reality vs Virtual Reality',
  'Blockchain Technology and its Applications',
  'Cyber Crime and Security',
];

const reactions = [
  'Nice',
  'Cool',
  'Interesting',
  'Everybody knows that',
  'I did not know',
  'That is great',
  'I had no idea',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

// Function to generate random thoughts names.
const getRandomThought = () => {
  return getRandomArrItem(appDescriptions);
};

// Function to generate random reactions that we can add to Thought object.
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const createdAt =  today.toLocaleDateString();
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username: getRandomName(),
      createdAt:createdAt
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThought, getRandomReactions };
