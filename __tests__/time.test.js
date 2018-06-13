let timeFunctions = require('../src/config/timeUtil');

/*
 * Test fromEpoch Function
 * Should return correct time and date formated correctly
 */
test('Should return Mon, Jun 11th, 8:22 am', () => {
  let testValue = 1528726966000
  let testFormat = 'ddd, MMM Do, h:mm a'

  let result = timeFunctions.fromEpoch(testValue, testFormat);
  expect(result).toBe('Mon, Jun 11th, 8:22 am')
});

/*
 * Test fromEpoch Function
 * Should return correct time and date formated correctly
 */
test('Should return Wed, Jan 1st, 8:00 am', () => {
  let testValue = 1577865600000
  let testFormat = 'ddd, MMM Do, h:mm a'

  let result = timeFunctions.fromEpoch(testValue, testFormat);
  expect(result).toBe('Wed, Jan 1st, 1:00 am')
});





/*
 * Test toEpoch addZeroToFrontHelper
 * Should return number with correct amount of leading zeros
 */
test('Should return reformatted value 01', () => {
  let testValue = 1

  let result = timeFunctions.addZeroToFrontHelper(testValue);
  expect(result).toBe('01')
});

/*
 * Test toEpoch addZeroToFrontHelper
 * Should return number with correct amount of leading zeros
 */
test('Should return reformatted value 10', () => {
  let testValue = 10

  let result = timeFunctions.addZeroToFrontHelper(testValue);
  expect(result).toBe('10')
});

/*
 * Test toEpoch addZeroToFrontHelper
 * Should return number with correct amount of leading zeros
 */
test('Should return reformatted value 100', () => {
  let testValue = 100

  let result = timeFunctions.addZeroToFrontHelper(testValue);
  expect(result).toBe('100')
});
