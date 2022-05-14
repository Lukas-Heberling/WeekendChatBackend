import createClientResponse from '../../Helper/createClientResponse.js';

const loginUser = (connection, name, password) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM user where name = "${name}"
    `;
    connection.query(queryString, (error, rows) => {
      if (error) {
        reject(createClientResponse(
          false,
          ["An unknown error occured, pls wait a second and try again later. .-."]
        ));
      };
      if (rows && rows[0]) {
        const userData = rows[0];
        if (userData.password === password) {
          resolve(createClientResponse(
            true,
            [
              "Successfully logged in!",
              `Welcome Back to the chat ${userData.name}` 
            ],
            userData
          ));
        } else {
          reject(createClientResponse(
            false,
            ["Sry the password seems to be incorrect -.-"]
          ));
        }
      } else {
        reject(createClientResponse(
          false,
          ["No user found by the given name. Pls check youre grammer XD"]
        ));
      }
    });
  });
};

export default loginUser;