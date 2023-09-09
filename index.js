/**
 * Checks if a given IP address is valid.
 * Supports both IPv4 and IPv6 addresses.
 * @param {string} ip - The IP address to validate.
 * @returns {boolean} - True if the IP address is valid, false otherwise.
 */
function isValidIP(ip) {
  // Define a regular expression pattern for a valid IPv4 address
  const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // Test the input IP against the IPv4 pattern
  if (ipv4Pattern.test(ip)) {
    return true;
  }

  // Define a regular expression pattern for a valid IPv6 address
  const ipv6Pattern = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

  // Test the input IP against the IPv6 pattern
  if (ipv6Pattern.test(ip)) {
    return true;
  }

  // If the input IP does not match either pattern, return false
  if (!ipv4Pattern.test(ip) && !ipv6Pattern.test(ip)) {
    return false;
  }

  return false;
}


module.exports = {
  isValidIP
};
