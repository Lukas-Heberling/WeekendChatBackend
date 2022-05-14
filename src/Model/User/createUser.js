import createClientResponse from '../../Helper/createClientResponse.js';

/**
 * Function to create a new user
 * @param {Object} connection the connection to the database
 * @param {String} name the nickname of the new user
 * @param {String} password the password of the new user
 */
const createUser = (connection,name, password) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO user (name, password) VALUES ("${name}", "${password}")
    `;
    connection.query(queryString, (error) => {
      if (error) {
        reject(createClientResponse(
          false,
          ["Couldn't create a new User im sry :("]
        ));
      }
      resolve(createClientResponse(
        true,
        [
          "Successfully created a new user!",
          `Welcome to the chat ${name}`
        ],
      ));
    });
  });
};

export default createUser;