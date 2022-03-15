var expect = require('chai').expect;
var starWars = require("./index")

describe('stawars-names', function() {
    describe('all', function() {
        it('should be an array of string', function() {
            expect(starWars.all).to.be.satisfy(isArrayOfStrings)

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === "string"
                })
            }
        })

        it('should contain Shmi Skywalker', function() {
            expect(starWars.all).to.include('Shmi Skywalker')
        })
    })

    describe('random', function() {
        it('should return a random item from thr starWars.all', function() {
            var randomItem = starWars.random()

            expect(starWars.all).to.include(randomItem)
        })
    })
})