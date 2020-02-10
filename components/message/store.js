const db = require("mongoose");
const Model = require("./model");

//mongodb+srv://dbuser:D3s4rr0ll0@cluster0-w7ttm.mongodb.net/test
db.Promise = global.Promise;
db.connect("mongodb+srv://dbuser:D3s4rr0ll0@cluster0-w7ttm.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log("[db] Concetado con exito");

const addMessage = message => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async filterUser => {
  let filter = {};
  if(filterUser !== null){
    filter = {user: filterUser}
  }
  const messages = await Model.find(filter);
  return messages;
};

const updateText = async (id, message) => {
  const foundMessage = await Model.findOne({
    _id: id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

const deleteMessage = (id) =>{
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: deleteMessage
};
