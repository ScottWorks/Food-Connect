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


/*
 * Test sumTotalBasketFMV
 * Should correctly calculate the total FMV of a Basket
 */
test('Should return correct value of 500', ()=> {
    let testValue = [{"FMV": 100, "item": "Bagel", "weight": 15}, {"FMV": 100, "item": "Donuts", "weight": 515}, {"FMV": 100, "item": "Donuts", "weight": 515}, {"FMV": 100, "item": "Donuts", "weight": 515}, {"FMV": 100, "item": "Donuts", "weight": 515}]
    let result = analyticFunctions.sumTotalBasketFMV(testValue);

    expect(result).toBe(500);
});

/*
 * Test sumTotalBasketFMV
 * Should correctly calculate the total FMV of a Basket
 */
test('Should return correct value of 0', ()=> {
    let testValue = [{"item": "Bagel", "weight": 15}, {"item": "Donuts", "weight": 515}, {"item": "Donuts", "weight": 515}, {"item": "Donuts", "weight": 515}, {"item": "Donuts", "weight": 515}]
    let result = analyticFunctions.sumTotalBasketFMV(testValue);

    expect(result).toBe(0);
})

/*
 * Test sumTotalFMV
 * Should correclty calucalte the total FMV of an array of baskets
 */

 test('Should return correct value of 600',()=> {
     let testValue = [[{"FMV": 100, "item": "Croissants", "weight": 65}, {"FMV": 100, "item": "Bread", "weight": 45}],[{"FMV": 100, "item": "Croissants", "weight": 65}, {"FMV": 100, "item": "Bread", "weight": 45}],[{"FMV": 100, "item": "Croissants", "weight": 65}, {"FMV": 100, "item": "Bread", "weight": 45}]]
     let result = analyticFunctions.sumTotalFMV(testValue)

     expect(result).toBe(600)
 });

/*
 * Test sumTotalFMV
 * Should correclty calucalte the total FMV of an array of baskets
 */

test('Should return correct value of 0',()=> {
    let testValue = [[{"item": "Croissants", "weight": 65}, {"item": "Bread", "weight": 45}],[{"item": "Croissants", "weight": 65}, {"item": "Bread", "weight": 45}],[{"item": "Croissants", "weight": 65}, {"item": "Bread", "weight": 45}]]
    let result = analyticFunctions.sumTotalFMV(testValue)

    expect(result).toBe(0)
});

/*
 * Test generateRandomColors
 * Should correctly return an array of RGB colors
 */

test('Should return an array of 10 colors', ()=> {
    let testValue = 10;
    let result = analyticFunctions.generateRandomColors(testValue);

    expect(result.length).toBe(10);
});