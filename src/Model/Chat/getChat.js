import createClientResponse from "../../Helper/createClientResponse.js";

const getChat = (connection, userId1, userId2) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT
        sendBy.name as sender, 
          fromUser,
          toUser,
          message,
          time
      FROM messages
      LEFT JOIN (
      SELECT name, id
      FROM user
      ) sendBy
      ON sendBy.id = messages.fromUser
      where (fromUser = ${userId1} or fromUser = ${userId2})
      AND (toUser = ${userId1} or toUser = ${userId2})
      ORDER BY time ASC;
    `;
    connection.query(queryString, (error, rows) => {
      if (error) {
        reject(createClientResponse(
          false,
          ["An unknown error occured, but pls dont cry -.-"]
        ));
      }
      resolve(createClientResponse(
        true,
        [`${rows.length} messages found XD`],
        rows
      ));
    });
  });
};

export default getChat;