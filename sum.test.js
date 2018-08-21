const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).toBeTruthy();
      }
    }
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);  This won't work because of rounding error; this rounds to a random digit
    expect(value).toBeCloseTo(0.3); // This works.
  });

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });

  const gundamList = [
      'Wing Zero',
      'Zeta Gundam',
      'Barbatos Gundam',
      'Exia Gundam',
  ];

  test('The gundam list has Exia on it.', () => {
      expect(gundamList).toContain('Exia Gundam');
  });

  function compileAndroidCode() {
    throw new ConfigError('you are using the wrong JDK');
  }
  


  //expect(what we're checking, returns expectation object) 
  //toBe(what we're expecting, 'matcher', tracks with expecation object.)
  //toBe uses Object.is to check exact equality-- toEqual checks the value of an object instead.
  //toEqual recursively checks every field of an object or array.

  //checking truthiness with these:
  /*
  .toBeNull();
  .toBeDefined();
  .toBeUndefined();
  .toBeTruthy();
  .toBeFalsy();
  and...you can add .not.whatever to check the opposite.
  */

  //for numbers, toEqual and toBe are the same thing.
  //for floats, you can use toBeCloseTo to avoid problems where the rounding is really close but irrelevant 

/*
  for strings, you can use .toMatch; you must use regular expressions though eg. /I/, /hello/
  for arrays, you can use .toContain to find something in it
  can use .toThrow, targetting the function in question to check whether or not the throw part of a function works when you call it.
  */