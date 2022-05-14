import createUser from "../Model/User/createUser.js";
import loginUser from "../Model/User/loginUser.js";

class user {
  constructor (newConnection) {
    this.connection = newConnection;
  }

  /**
   * function to create a new user
   * @param {Object} req request parameters
   * @param {Obejct} res resolve parameters
   */
  createNewUser(req, res) {
    const { name, password } = req.params;
    createUser(
      this.connection,
      name,
      password, 
    )
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
  };

  authenticateUser(req, res) {
    const {name, password} = req.params;
    loginUser(
      this.connection,
      name,
      password
    )
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
  }

}

export default user;