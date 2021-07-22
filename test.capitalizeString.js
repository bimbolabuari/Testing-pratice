const capitalizeString = require('./capitalizeString');

test('adds coding to equals Coding', () => {
  expect(capitalizeString('coding')).toBe('Coding');
});

test('adds helPer to equals Helper', () => {
    expect(capitalizeString('helPer')).toBe('Helper');
  });

  test('adds technolOGy to equals Technology', () => {
    expect(capitalizeString('technolOGy')).toBe('Technology');
  });