let analyticFunctions = require('../src/config/analyticsUtil');

/*
 * Test sumTotalBasketWeight Function
 * Should calculate the weight of 1 particular basket
 */
test('Should return correct value of 2075', ()=> {
    let testValue = [{"FMV": 5, "item": "Bagel", "weight": 15}, {"FMV": 50, "item": "Donuts", "weight": 515}, {"FMV": 50, "item": "Donuts", "weight": 515}, {"FMV": 50, "item": "Donuts", "weight": 515}, {"FMV": 50, "item": "Donuts", "weight": 515}]

    let result = analyticFunctions.sumTotalBasketWeight(testValue);

    expect(result).toBe(2075)
});

/*
 * Test sumTotalBasketWeight Function
 * Should calculate the weight of 1 particular basket
 */

 test('Should return correct value of 0', ()=> {
     let testValue = [{"FMV": 5, "item": "Bagel"}, {"FMV": 5, "item": "Bagel"}];

     let result = analyticFunctions.sumTotalBasketWeight(testValue);

     expect(result).toBe(0)
 });

 /*
 * Test sumTotalWeight Function
 * Should calculate the weight of an Array of Baskets
 */
test('Should Return correct value of 0', ()=> {
    let testValue = [[{"FMV": 5, "item": "Bagel"}, {"FMV": 5, "item": "Bagel"}],[{"FMV": 5, "item": "Bagel"}, {"FMV": 5, "item": "Bagel"}], [{"FMV": 5, "item": "Bagel"}, {"FMV": 5, "item": "Bagel"}], [{"FMV": 5, "item": "Bagel"}, {"FMV": 5, "item": "Bagel"}]];

    let result = analyticFunctions.sumTotalWeight(testValue);

    expect(result).toBe(0);
});


 /*
 * Test sumTotalWeight Function
 * Should calculate the weight of an Array of Baskets
 */
test('Should Return correct value of 400', ()=> {
    let testValue = [[{"FMV": 50, "item": "Croissants", "weight": 100}, {"FMV": 50, "item": "Bread", "weight": 100}], [{"FMV": 50, "item": "Croissants", "weight": 100}, {"FMV": 50, "item": "Bread", "weight": 100}]]

    let result = analyticFunctions.sumTotalWeight(testValue);

    expect(result).toBe(400);
});