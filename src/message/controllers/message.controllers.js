const uuid = require("uuid");

const Message = require("../../models/message.models");

const getAllMessage = async () => {
  const data = await Message.findAll();
  return data;
};

const createMessage = async (data) => {
  const response = await Message.create({
    id: uuid.v4(),
    senderId: data.senderId,
    conversationId: data.conversationId,
    message: data.message,
  });

  return response;
};

const getMessageByID = async (id) => {
  const data = await Message.findOne({
    where: { id },
  });
  return data;
};

const deletMessage = async (id) => {
  const data = await Message.destroy({ where: { id } });
  return data;
};

module.exports = { getAllMessage, createMessage, getMessageByID, deletMessage };
