exports.success = (req, res, response, status) => {
  res.status(status || 200).send(response);
};

exports.error = (req, res, exception, status,log) => {
  console.log(log)
  res.status(status || 500).send(exception);
};
