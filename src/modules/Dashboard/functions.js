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
  let hasNoDuplicates = arr.some((item) => {
    return item.name === url;
  });
  return hasNoDuplicates;
}

/**
 * Copy item value to clipboard
 * @param {string} parsedUrl - url that gets copied to clipboard
 * @description
 * Creates a text area element
 * Assigns that text area the passed in value
 * Appends that element to the DOM
 * Selects the element
 * Copies the value of that element to the clipboard
 * Removes element from the DOM
 */
export function copyToClipBoard(parsedUrl) {
  const el = document.createElement('textarea');
  el.value = parsedUrl;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  return document.body.removeChild(el);
}
