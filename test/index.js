const isPalindrome = require('./index');

describe('isPalindrome', () => {
  it('returns true for "abba"', () => {
    expect(isPalindrome('abba')).toBe(true);
  });

  it('returns true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns true for "a"', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('returns false for "robot"', () => {
    expect(isPalindrome('robot')).toBe(false);
  });

  it('returns false for "ab"', () => {
    expect(isPalindrome('ab')).toBe(false);
  });
});
