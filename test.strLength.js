const strLength = require('./strLength');

test('adds tomatoes to equals true', () => {
  expect(strLength('tomatoes')).toBe(true);
});

test('adds renovations to equals false', () => {
    expect(strLength('renovations')).toBe(false);
  });

  test('adds tomatoes to equals 8', () => {
    expect(strLength('')).toBe(false);
  });