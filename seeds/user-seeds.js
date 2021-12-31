const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'user1',
    email: 'user1@test.com',
    password: 'secret',
  },
  {
    username: 'user2',
    email: 'user2@test.com',
    password: 'secret',
  },
  {
    username: 'user3',
    email: 'user3@test.com',
    password: 'secret',
  },
  {
    username: 'user4',
    email: 'user4@test.com',
    password: 'secret',
  },
  {
    username: 'user5',
    email: 'user5@test.com',
    password: 'secret',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
