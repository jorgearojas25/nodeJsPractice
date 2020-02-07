exports.response = (req, res, response, status) => {
  res.status(status || 200).send(response);
};

exports.controledException = (req, res, exception, status) => {
  res.status(status || 500).send(exception);
};
