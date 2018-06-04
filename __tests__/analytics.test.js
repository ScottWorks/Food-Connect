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
    let testValue = [
        {
            "basket_id": 4,
            "business_id": 1,
            "non_profit_id": null,
            "pick_up_time": "1528674446475",
            "scheduled_time": null,
            "status": 1,
            "items": [
                {
                    "FMV": 50,
                    "item": "Croissants",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Bread",
                    "weight": 0
                }
            ],
            "aws_path": null
        },
        {
            "basket_id": 9,
            "business_id": 4,
            "non_profit_id": null,
            "pick_up_time": "1528674446475",
            "scheduled_time": null,
            "status": 1,
            "items": [
                {
                    "FMV": 50,
                    "item": "Bagel",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Croissants",
                    "weight": 0
                }
            ],
            "aws_path": null
        },
        {
            "basket_id": 12,
            "business_id": 4,
            "non_profit_id": null,
            "pick_up_time": "1528674446475",
            "scheduled_time": null,
            "status": 1,
            "items": [
                {
                    "FMV": 50,
                    "item": "Bagel",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Bread",
                    "weight": 0
                }
            ],
            "aws_path": null
        }
    ];

    let result = analyticFunctions.sumTotalWeight(testValue);

    expect(result).toBe(0);
});


 /*
 * Test sumTotalWeight Function
 * Should calculate the weight of an Array of Baskets
 */
test('Should Return correct value of 400', ()=> {
    let testValue = [
        {
            "basket_id": 4,
            "business_id": 1,
            "non_profit_id": null,
            "pick_up_time": "1528674446475",
            "scheduled_time": null,
            "status": 1,
            "items": [
                {
                    "FMV": 50,
                    "item": "Croissants",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Bread",
                    "weight": 0
                }
            ],
            "aws_path": null
        },
        {
            "basket_id": 9,
            "business_id": 4,
            "non_profit_id": null,
            "pick_up_time": "1528674446475",
            "scheduled_time": null,
            "status": 1,
            "items": [
                {
                    "FMV": 50,
                    "item": "Bagel",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Croissants",
                    "weight": 0
                }
            ],
            "aws_path": null
        },
        {
            "basket_id": 12,
            "business_id": 4,
            "non_profit_id": null,
            "pick_up_time": "1528674446475",
            "scheduled_time": null,
            "status": 1,
            "items": [
                {
                    "FMV": 50,
                    "item": "Bagel",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 0
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 100
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 100
                },
                {
                    "FMV": 50,
                    "item": "Donuts",
                    "weight": 100
                },
                {
                    "FMV": 50,
                    "item": "Bread",
                    "weight": 100
                }
            ],
            "aws_path": null
        }
    ];

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

/*
 * Test formatNumber
 * Should correnctly return a formated string
 */

 test('Should return 3,999.99 as string', ()=> {
     let testValue = 3999.990
     let result = analyticFunctions.formatNumber(testValue, 2, 3, ",", ".");

     expect(result).toBe("3,999.99")
 });

 /*
  * Test getMealsSaved
  * Should correctly return a string representing total amount of meals saved
  */
 
  test('Should return 5,4829.73', ()=> {
      let testValue = 10000;
      let result = analyticFunctions.getMealsSaved(testValue);

      expect(result).toBe("5,489.73")
  });