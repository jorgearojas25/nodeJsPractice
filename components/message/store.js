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

const getMessages = async () => {
  const messages = await Model.find();
  return messages;
};

module.exports = {
  add: addMessage,
  list: getMessages
};
