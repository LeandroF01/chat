const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Conversations = require("./conversations.models");

const Participants = db.define("participants", {
  id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
  conversationId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "conversation_id",
    references: { key: "id", model: Conversations },
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: { key: "id", model: Users },
  },
});

module.exports = Participants;
