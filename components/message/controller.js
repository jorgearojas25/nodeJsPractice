const store = require("./store");

const AddMesagge = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log("[messageController] No hay usuario o mensaje");
      reject("Los datos son incorrectos");
      return false;
    }
    let respuesta = {
      id: Math.random(),
      user: user,
      date: new Date(),
      message: message
    };
    store.add(respuesta);
    resolve(respuesta);
  });
};

const GetMessage = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

module.exports = {
  AddMesagge,
  GetMessage
};
