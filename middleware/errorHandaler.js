const logEvents = require("../middleware/logEvents");

const errorHandaler = (error, req, res, next) => {
  logEvents.logEvents(error.message, "error-log");
  return res.status(400).send(error.message);
};

module.exports = errorHandaler;
