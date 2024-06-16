const mongoose = require("mongoose");
const Employees = require("../models/employeeModel");

const getAllEmployees = async (req, res) => {
  const allUsers = await Employees.find({});
  return res.json(allUsers);
};

const getEmployeeById = async (req, res) => {
  const userId = req.params.id;
  const userById = await Employees.findById(userId);
  return res.json(userById);
};

const createEmployee = async (req, res) => {
  const { first_name, last_name, email, address, company, job_title } =
    req.body;

  const isEmail = await Employees.find({ email });

  if (isEmail.length > 0) {
    return res.status(400).send("Email already exists");
  }

  const result = await Employees.create({
    firstName: first_name,
    lastName: last_name,
    email: email,
    address: address,
    company: company,
    jobTitle: job_title,
  });

  return res.status(201).send(result);
};

const updateEmployeeById = async (req, res) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  const isUserUpdated = await Employees.findByIdAndUpdate(
    userId,
    {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      address: req.body.address,
      company: req.body.company,
      jobTitle: req.body.job_title,
    },
    { new: true }
  );

  return res.send(isUserUpdated);

  //   const userIndex = users.findIndex((user) => user.id === userId);

  //   if (userIndex !== -1) {
  //     users.splice(userIndex, 1, { ...req.body, id: userId });

  //     fs.writeFile("./Users_Data.json", JSON.stringify(users), (err, data) => {
  //       if (err) {
  //         return res.json(err);
  //       } else {
  //         return res.json("Users Updated successfully");
  //       }
  //     });

  //     // console.log(users);
  //   } else {
  //     console.log("user Id not found");
  //     res.send("User Id Not Found");
  //   }
};

const deleteEmployeeById = async (req, res) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  const deletedUser = await Employees.findByIdAndDelete(userId);

  return res.send("User deleted Successfully");

  // const userIndex = users.findIndex((user) => user.id === userId);

  // if (userIndex !== -1) {
  //   users.splice(userIndex, 1);

  //   fs.writeFile("./Users_Data.json", JSON.stringify(users), (err, data) => {
  //     if (err) {
  //       return res.json(err);
  //     } else {
  //       return res.json("User Deleted successfully");
  //     }
  //   });
  // } else {
  //   console.log("user Id not found");
  //   res.send("User Id Not Found");
  // }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
