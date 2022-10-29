const messageControllers = require("../controllers/message.controllers");

const getAllMessage = (req, res) => {
  messageControllers
    .getAllMessage()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.messge });
    });
};

const getMessageByID = (req, res) => {
  const id = req.params.message_id;
  messageControllers
    .getMessageByID(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.messge });
    });
};

const createMessage = (req, res) => {
  const { message } = req.body;

  const senderId = req.user.id;
  const conversationId = req.params.conversation_id;

  if (message && conversationId) {
    messageControllers
      .createMessage({
        senderId,
        conversationId,
        message,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        senderId: "uuid",
        conversationId: "uuid",
        message: "string",
      },
    });
  }
};

const deletMessage = (req, res) => {
  const id = req.params.message_id;
  messageControllers
    .deletMessage(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(400).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllMessage,
  getMessageByID,
  createMessage,
  deletMessage,
};
