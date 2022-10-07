const { User } = require('../models') 

const userData = [
  {
    username: 'realstuff102',
    password: 'pass1234'
  },
  {
    username: 'beanman03',
    password: '12password'
  },
  {
    username: 'takoyaki12',
    password: 'wordofpass12'
  },
  {
    username: 'tonkatsuOG',
    password: 'spicynoodl'
  },
  {
    username: 'MonkeyDLuffy',
    password: 'onepiece'
  },
  {
    username: 'hokage01',
    password: 'uzumaki12'
  },
  {
    username: 'borutosucks',
    password: 'itreallydoes'
  },
  {
    username: 'skyisland',
    password: 'believeit'
  },
  {
    username: 'seattleIsAwesome',
    password: 'JShackers'
  },
  {
    username: 'cloudComputing',
    password: 'forgetQuantum'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers