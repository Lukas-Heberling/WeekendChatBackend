import getChats from "../Model/Chat/getChats.js";
import getChat from "../Model/Chat/getChat.js";

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
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
  };

  /**
   * function to create a new chat
   * @param {Object} req request object
   * @param {Object} res resolve object
   */
  getChat(req, res) {
    const {from, to} = req.params;
    getChat(this.connection, from, to)
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
  };
};

export default chat;