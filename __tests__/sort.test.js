//A test to test functionality the functions in sortUtil.js.

const fns = require('../src/config/sortUtil.js');

let testBasket = [
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
    test: test
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
    items: [{ item: 'Beer' }, { item: 'Scottworks' }, { item: 'Banana' }],
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

test('sortByWishList should return sorted array based on wishlist items', () => {
  let wishList = {
    derp: 'derp',
    items: [{ item: 'funky' }, { item: 'apple' }]
  };
  let result = fns.sortByWishList(testBasket, wishList);
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
      items: [{ item: 'Beer' }, { item: 'Scottworks' }, { item: 'Banana' }],
      test: 'test',
      test: 'test',
      test: 'test'
    }
  ]);
});

// test('', () => {});

// test('', () => {});

// test('', () => {});

// test('', () => {});
