function stringLength(string) {
    const length = string.length;
  
    if (length === 0) {
      throw new Error('String must have at least 1 character');
    }
  
    if (length > 10) {
      throw new Error('String cannot be longer than 10 characters');
    }
  
    return length;
  }
  
  module.exports = {
    stringLength,
  };
  