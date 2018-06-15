//A test to test functionality of the searchBasket Function in searchUtil.js.
const fns = require('../src/config/searchUtil');

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

test('should retun an array of objects', () => {
  let keyword = 'Banana';
  let result = fns.searchBaskets(testBasket, keyword);
  expect(result).toEqual([
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
        { item: 'Banana' }
      ],
      test: 'test',
      test: 'test',
      test: 'test'
    }
  ]);
});

test('should retun an array of objects', () => {
  let keyword = 'banana';
  let result = fns.searchBaskets(testBasket, keyword);
  expect(result).toEqual([
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
        { item: 'Banana' }
      ],
      test: 'test',
      test: 'test',
      test: 'test'
    }
  ]);
});

test('should return an empty array', () => {
  let keyword = 'Derrrrpp';
  let result = fns.searchBaskets(testBasket, keyword);
  expect(result).toEqual([]);
});
