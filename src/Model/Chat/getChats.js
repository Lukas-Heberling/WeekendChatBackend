import createClientResponse from "../../Helper/createClientResponse.js";

/**
 * get all the possible chats
 * @param {Object} connection connection to the database
 */
const getChats = (connection) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT name, id FROM user;
    `
    connection.query(queryString, (error, rows) => {
      if (error) {
        reject(createClientResponse(
          false,
          ["An unknown error occured, but pls don't cry -.-"]
        ))
      }
      if (rows && rows[0]) {
        resolve(createClientResponse(
          true,
          [`${rows.lentgh} possible chats found`],
          rows
        ));
      } else {
        reject(createClientResponse(
          false,
          ["There are no chats, seems like no one wants to chat with you -.-"]
        ));
      }
    });
  });
};

export default getChats;