import dayjs from 'dayjs';
import createMessage from '../Model/Message/createMessage.js';

class message {
  constructor (connection) {
    this.connection = connection;
  }

  /**
   * Function to create a new message
   * @param {Object} req request obejct
   * @param {Number} req.params.from the userId which will sent the message
   * @param {Number} req.params.to the userId which will receive the message
   * @param {String} req.params.message the messgae that will be sent
   * @param {Object} res resolve object
   */
  createMessage(req, res) {
    const {from, to, message} = req.params;
    const timestamp = dayjs().unix();
    createMessage(
      this.connection,
      from,
      to,
      message,
      timestamp
    )
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
  }
};

export default message;