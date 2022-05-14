import getChats from "../Model/Chat/getChats.js";

class chat {
  constructor (newConnection) {
    this.connection = newConnection;
  }

  /**
   * Get all the possible chats
   * @param {Objet} req request object
   * @param {Object} res resolve object
   */
  getAllChats(req, res) {
    getChats(this.connection)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
  };
};

export default chat;