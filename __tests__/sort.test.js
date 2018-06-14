//A test to test functionality the functions in sortUtil.js.
const fns = require('../src/config/sortUtil.js');

let testBasket1 = [
  {
    test: 'test',
    test: 'test',
    test: 'test',
    items: [
      { item: 'Beer' },
      { item: 'Birds' },
      { item: 'Brine' },
      { item: 'Burp' },
      { item: 'Banana' }
    ],
    test: 'test'
  },
  {
    items: [
      { item: 'Apple' },
      { item: 'Good' },
      { item: 'Tea' },
      { item: 'Sauce' }
    ]
  },
  {
    test: 'test',
    test: 'test',
    test: 'test',
    items: [
      { item: 'Beer' },
      { item: 'Gerby' },
      { item: 'Scottworks' },
      { item: 'Weed' }
    ],
    test: 'test',
    test: 'test',
    test: 'test'
  },
  {
    test: 'test',
    test: 'test',
    test: 'test',
    items: [
      { item: 'Beer' },
      { item: 'Gerby' },
      { item: 'Scottworks' },
      { item: 'Banana' }
    ],
    test: 'test',
    test: 'test',
    test: 'test'
  },
  {
    test: 'test',
    test: 'test',
    items: [{ item: 'Funky' }, { item: 'disco' }, { item: 'techno' }]
  }
];

let testBasket2 = [
  {
    pick_up_time: 1,
    test: 'test',
    test: 'test',
    test: 'test',
    items: [
      { item: 'Beer' },
      { item: 'Birds' },
      { item: 'Brine' },
      { item: 'Burp' },
      { item: 'Banana' }
    ],
    test: 'test'
  },
  {
    pick_up_time: 5,
    items: [
      { item: 'Apple' },
      { item: 'Good' },
      { item: 'Tea' },
      { item: 'Sauce' }
    ]
  },
  {
    pick_up_time: 2,
    test: 'test',
    test: 'test',
    test: 'test',
    items: [
      { item: 'Beer' },
      { item: 'Gerby' },
      { item: 'Scottworks' },
      { item: 'Weed' }
    ],
    test: 'test',
    test: 'test',
    test: 'test'
  },
  {
    pick_up_time: 6,
    test: 'test',
    test: 'test',
    test: 'test',
    items: [
      { item: 'Beer' },
      { item: 'Gerby' },
      { item: 'Scottworks' },
      { item: 'Banana' }
    ],
    test: 'test',
    test: 'test',
    test: 'test'
  },
  {
    pick_up_time: 1,
    test: 'test',
    test: 'test',
    items: [{ item: 'Funky' }, { item: 'disco' }, { item: 'techno' }]
  }
];

test('sortByWishList should return sorted array based on wishlist items', () => {
  let wishList = {
    derp: 'derp',
    items: [{ item: 'funky' }, { item: 'apple' }]
  };
  let result = fns.sortByWishList(testBasket1, wishList);
  expect(result).toEqual([
    {
      items: [
        { item: 'Apple' },
        { item: 'Good' },
        { item: 'Tea' },
        { item: 'Sauce' }
      ]
    },
    {
      test: 'test',
      test: 'test',
      items: [{ item: 'Funky' }, { item: 'disco' }, { item: 'techno' }]
    },
    {
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Birds' },
        { item: 'Brine' },
        { item: 'Burp' },
        { item: 'Banana' }
      ],
      test: 'test'
    },
    {
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Gerby' },
        { item: 'Scottworks' },
        { item: 'Weed' }
      ],
      test: 'test',
      test: 'test',
      test: 'test'
    },
    {
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Gerby' },
        { item: 'Scottworks' },
        { item: 'Banana' }
      ],
      test: 'test',
      test: 'test',
      test: 'test'
    }
  ]);
});

test('sortRecent should return sorted array based on pick_up_time property newest to oldest (Epoch Time)', () => {
  let result = fns.sortRecent(testBasket2);
  expect(result).toEqual([
    {
      pick_up_time: 6,
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Gerby' },
        { item: 'Scottworks' },
        { item: 'Banana' }
      ],
      test: 'test',
      test: 'test',
      test: 'test'
    },
    {
      pick_up_time: 5,
      items: [
        { item: 'Apple' },
        { item: 'Good' },
        { item: 'Tea' },
        { item: 'Sauce' }
      ]
    },
    {
      pick_up_time: 2,
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Gerby' },
        { item: 'Scottworks' },
        { item: 'Weed' }
      ],
      test: 'test',
      test: 'test',
      test: 'test'
    },
    {
      pick_up_time: 1,
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Birds' },
        { item: 'Brine' },
        { item: 'Burp' },
        { item: 'Banana' }
      ],
      test: 'test'
    },
    {
      pick_up_time: 1,
      test: 'test',
      test: 'test',
      items: [{ item: 'Funky' }, { item: 'disco' }, { item: 'techno' }]
    }
  ]);
});

test('sortOldest should return sorted array based on pick_up_time property oldest to newest (Epoch Time)', () => {
  let result = fns.sortOldest(testBasket2);
  expect(result).toEqual([
    {
      pick_up_time: 1,
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Birds' },
        { item: 'Brine' },
        { item: 'Burp' },
        { item: 'Banana' }
      ],
      test: 'test'
    },
    {
      pick_up_time: 1,
      test: 'test',
      test: 'test',
      items: [{ item: 'Funky' }, { item: 'disco' }, { item: 'techno' }]
    },
    {
      pick_up_time: 2,
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Gerby' },
        { item: 'Scottworks' },
        { item: 'Weed' }
      ],
      test: 'test',
      test: 'test',
      test: 'test'
    },
    {
      pick_up_time: 5,
      items: [
        { item: 'Apple' },
        { item: 'Good' },
        { item: 'Tea' },
        { item: 'Sauce' }
      ]
    },
    {
      pick_up_time: 6,
      test: 'test',
      test: 'test',
      test: 'test',
      items: [
        { item: 'Beer' },
        { item: 'Gerby' },
        { item: 'Scottworks' },
        { item: 'Banana' }
      ],
      test: 'test',
      test: 'test',
      test: 'test'
    }
  ]);
});
