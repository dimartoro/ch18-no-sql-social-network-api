const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
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
