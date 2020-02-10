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

const GetMessage = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

const UpdateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if(!id || !message){
      reject('Invalida data')
      return false;
    }
    const response = await store.updateText(id, message)

    resolve(response);
  })
}

const DeleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if(!id){
      reject('Id invalido');
      return false;
    }
    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });

  });
}

module.exports = {
  AddMesagge,
  GetMessage,
  UpdateMessage,
  DeleteMessage,
};
