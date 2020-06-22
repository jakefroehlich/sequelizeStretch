const db = require('./dbConfig');
const Sequelize = require('sequelize');

//YOUR CODE GOES HERE

const Recipe = db.define('Recipe', {
    name : {
        type: Sequelize.STRING,
        defaultValue : "cereal",
        allowNull : false,
    },
    cookTime: {
        type: Sequelize.INTEGER
    },
    vegan: {
        type: Sequelize.BOOLEAN
    }
})

//--------------------
module.exports = Recipe;
