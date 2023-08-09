const { isValidIP } = require('./index');

describe('isValidIP', () => {
  test('returns true for a valid IPv4 address', () => {
    expect(isValidIP('192.168.0.1')).toBe(true);
  });

  test('returns true for a valid IPv6 address', () => {
    expect(isValidIP('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
  });

  test('returns false for an invalid IP address', () => {
    expect(isValidIP('not.an.ip.address')).toBe(false);
  });
});