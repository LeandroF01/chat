const uuid = require("uuid");

const Conversations = require("../../models/conversations.models");

const getAllConversations = async () => {
  const data = await Conversations.findAll();
  return data;
};

const createConversation = async (data) => {
  const response = await Conversations.create({
    id: uuid.v4(),
    title: data.title,
    imageUrl: data.imageUrl,
    createdBy: data.createdBy,
  });

  return response;
};

const getConversationByID = async (id) => {
  const data = await Conversations.findOne({
    where: { id },
  });
  return data;
};

const updateConversationByID = async (id, data) => {
  const result = await Conversations.findOne(data, {
    where: { id },
  });

  return result;
};

const deletConversation = async (id) => {
  const data = await Conversations.destroy({ where: { id } });
  return data;
};

module.exports = {
  getAllConversations,
  createConversation,
  getConversationByID,
  updateConversationByID,
  deletConversation,
};
