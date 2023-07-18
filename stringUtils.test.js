const { stringLength } = require('./stringUtils');

describe('stringLength', () => {
  test('returns the correct length of the string', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('throws an error if the string is empty', () => {
    expect(() => stringLength('')).toThrow('String must have at least 1 character');
  });

  test('throws an error if the string is longer than 10 characters', () => {
    expect(() => stringLength('thisisaverylongstring')).toThrow('String cannot be longer than 10 characters');
  });
});
