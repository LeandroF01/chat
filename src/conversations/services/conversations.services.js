const conversationsControllers = require("../controllers/conversations.controllers");

const getAllConcersation = (req, res) => {
  conversationsControllers
    .getAllConversations()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.messge });
    });
};

const getConversationByID = (req, res) => {
  const id = req.params.id;
  conversationsControllers
    .getConversationByID(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.messge });
    });
};

const updateConversationByID = (req, res) => {
  const id = req.params.id;
  const { title, imageUrl } = req.body;

  conversationsControllers
    .updateConversationByID(id, { title, imageUrl })
    .then((data) => {
      if (data[0]) {
        res.status(200).json({
          message: `Conversations with ID: ${id}, edited succesfully`,
        });
      } else {
        res.status(400).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createConversation = (req, res) => {
  const { title, imageUrl } = req.body;

  const createdBy = req.user.id;

  if (title && imageUrl) {
    conversationsControllers
      .createConversation({
        title,
        imageUrl,
        createdBy,
      })
      .then((data) => {
        res.status(201).json(data);
        console.log(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        title: "string",
        imageUrl: "string",
        createdBy: "uuid",
      },
    });
  }
};

const deletConversation = (req, res) => {
  const id = req.params.id;
  conversationsControllers
    .deletConversation(id)
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
  getAllConcersation,
  getConversationByID,
  updateConversationByID,
  createConversation,
  deletConversation,
};
