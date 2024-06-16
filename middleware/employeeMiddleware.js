const registerEmployeeMiddleware = (req, res, next) => {
  const { first_name, last_name, email, address, company, job_title } =
    req.body;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !address ||
    !company ||
    !job_title
  ) {
    return res.status(400).send("All fields are required");
  }

  next();
};

module.exports = { registerEmployeeMiddleware };
