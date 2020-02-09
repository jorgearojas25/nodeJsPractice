exports.success = (req, res, response, status) => {
  
  let resultado = {
    resultado: true,
    tipoNotificacion: 1,
    Entidades:response,
    mensajes: ""
  }
  res.status(status || 200).send(resultado);
};

exports.error = (req, res, exception, status,log) => {
  console.log(log)
  let resultado = {
    resultado: false,
    tipoNotificacion: 1,
    Entidades:[],
    mensajes: exception
  }
  res.status(status || 500).send(resultado);
};
