const AddMesagge = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log("[messageController] No hay usuario o mensaje");
      reject("Los datos son incorrectos");
      return false;
    }
    let respuesta = {
        resultado: true,
        tipoNotificacion: 1,
        Entidades: [
          { id: 1, nombre: user, fecha: new Date(), }
        ],
        mensajes: [message]
      };
    console.log(respuesta);
    resolve(respuesta);
  });
};

module.exports = {
  AddMesagge
};
