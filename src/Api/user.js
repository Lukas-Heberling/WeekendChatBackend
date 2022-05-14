import createUser from "../Model/User/createUser.js";

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
    /** calling the model t a create a new user */
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

}

export default user;