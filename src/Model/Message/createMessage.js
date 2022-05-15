import createClientResponse from '../../Helper/createClientResponse.js';

const createMessage = (connection, from, to, message, timestamp) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO messages (fromUser, toUser, message, time)
      VALUES ("${from}", "${to}", "${message}", "${timestamp}")
    `;
    connection.query(queryString, (error) => {
      if (error) {
        reject(createClientResponse(
          false,
          ["An unknown error occured, pls try to send the message again later -.-"]
        ));
      }
      resolve(createClientResponse(
        true,
        ["Message has been sent without problems :)"]
      ));
    });
  });
};

export default createMessage;