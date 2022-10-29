const Users = require("./users.models");
const Conversations = require("./conversations.models");
const Message = require("./message.models");
const Participants = require("./participants.models");

const initModels = () => {
  Conversations.belongsTo(Users);
  Users.hasMany(Conversations);

  Message.belongsTo(Users);
  Users.hasMany(Message);

  Conversations.hasMany(Participants);

  Conversations.hasMany(Message);
};

module.exports = initModels;
