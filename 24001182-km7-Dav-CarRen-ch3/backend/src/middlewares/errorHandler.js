module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  console.error(err); // This will log the full error stack
  res.status(status).json({ status, message });
};
