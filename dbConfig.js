//DO NOT TOUCH
//This file configures and creates a new sequelize instance.

const config = {
  database: 'sequelize_stretch',
  dialect: 'postgres',
  logging: false,
  password: 'jjf11ltf8',
  username: 'postgres',
};

const Sequelize = require('sequelize');

const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
module.exports = db;
