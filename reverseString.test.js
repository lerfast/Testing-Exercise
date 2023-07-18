const { reverseString } = require('./reverseString');

describe('reverseString', () => {
  test('reverses the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});
