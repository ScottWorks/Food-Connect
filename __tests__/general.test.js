//A few tests to test functionality on the itemNameConverter function.
//Might want to consider changing the function to account for words that end with 'y' to add 'ies' instead of 's'.

let generalFunctions = require('../src/config/generalUtil.js')

test('Should return string in all caps', ()=>{
    let testString = 'GrApEs';

    let result = generalFunctions.itemNameConverter(testString);

    expect(result).toBe('GRAPES');
});

test('Should concaterate an S onto string if one doesn\'t exist', ()=>{
    let testString = 'bean';

    let result = generalFunctions.itemNameConverter(testString);

    expect(result).toBe('BEANS');
});

test('Shouldn\'t concaterate an S onto a string if one already exists', ()=>{
    let testString = 'CARROTS';

    let result = generalFunctions.itemNameConverter(testString);

    expect(result).toBe('CARROTS');
});

test('Should throw an error if a number is given and not a string', ()=>{
    let testNum = 8675309;

    expect(() => {generalFunctions.itemNameConverter(testNum)}).toThrow(TypeError);
});

test('If a blank string is given, do not add an S', ()=>{
    let testString = ' ';

    let result = generalFunctions.itemNameConverter(testString);

    expect(result).toBe(' ');
});

test('If invalid email - should return false', ()=> {
    let testEmail = 'jdkjf';

    let result = generalFunctions.validateEmail(testEmail);
    expect(result).toBeFalsy();
})

test('If invalid emial - should return false', ()=> {
    let testEmail = 'xnkdjl@'

    let result = generalFunctions.validateEmail(testEmail);
    expect(result).toBeFalsy();
})

test('If invalid emial - should return false', ()=> {
    let testEmail = 'xnkdjl@.......com'

    let result = generalFunctions.validateEmail(testEmail);
    expect(result).toBeFalsy();
})

test('If invalid email - should return false', ()=> {
    let testEmail = 'xnkdjl@.com'

    let result = generalFunctions.validateEmail(testEmail);
    expect(result).toBeFalsy();
})

test('If valid email - should return true', ()=> {
    let testEmail = 'hello_world@world.com'

    let result = generalFunctions.validateEmail(testEmail);
    expect(result).toBeTruthy();
})

test('If valid email - should return true', ()=> {
    let testEmail = 'hello_worl324XLKJDJ_LKJSDFLKJSD@worldLSDIJF98980KJLN.com'

    let result = generalFunctions.validateEmail(testEmail);
    expect(result).toBeTruthy();
})