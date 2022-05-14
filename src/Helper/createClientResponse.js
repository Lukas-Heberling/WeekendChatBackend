/**
 * Create a new resolve message
 * @param {Boolean} type true => success, false => error 
 * @param {Array} message an array of messages that will be displayed in the client
 * @param {any} value the value that the user will receive
 * @returns {object} this object will be resolves to the client
 */
const createClientResponse = (type, message, value) => ({
  type: type ? 'success' : 'error',
  message,
  value,
});

export default createClientResponse;