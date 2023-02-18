const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let testArr = ["test1", "test2", "test2"]
    let shuffledArray = shuffleArray(testArr);

    test('return an array', () => {
        expect(shuffledArray).toBeInstanceOf(Array);
    })

    test('return same length as parameter array', () => {
        expect(shuffleArray.length).toBe(testArr.length);
    })
})