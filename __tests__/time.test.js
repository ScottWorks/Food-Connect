let timeFunctions = require('../src/config/timeUtil');

/*
 * Test fromEpoch Function
 * 
 */
test('Should return correct value of Fri, Jun 8th, 2:17', ()=> {
    let testValue = 1528489043
    let testFormat = 'ddd, MMM Do, h:mm a'

    let result = analyticFunctions.sumTotalBasketWeight(testValue, testFormat);
    console.log(result)
    expect(result).toBe(2075)
});
