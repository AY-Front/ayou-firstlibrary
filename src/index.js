var uniqueRandomArray = require('unique-random-array')
var starWarsName = require('./starwars-name.json')

module.exports = {
    all: starWarsName,
    random: uniqueRandomArray(starWarsName)
}