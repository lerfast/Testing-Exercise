// capitalize.test.js
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  describe('capitalize', () => {
    test('capitalizes the first character of the string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });
  });
  
  module.exports = {
    capitalize,
  };
  