/**
 * Parse url name to lowercase and replace whitespace with a dash
 * @param {string}
 * @returns {string}
 */
export function parseName(str) {
  let cleaned = str.replace(/\s/g, '-').toLowerCase();
  return cleaned;
}

/**
 * Generate random string
 * @returns {string}
 */
export function randomizer() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(2, 5);
}

/**
 * Check if a query item name already exists in the db
 * @returns {Boolean}
 */
export function checkForDuplicate(arr, url) {
  let hasNoDuplicates = arr.every((item) => item.name === url);
  return hasNoDuplicates;
}
