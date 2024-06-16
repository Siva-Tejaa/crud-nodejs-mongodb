const express = require("express");
const router = express.Router();

const {
  registerEmployeeMiddleware,
} = require("../middleware/employeeMiddleware");

const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
} = require("../controllers/employeeController");

router.get("/", getAllEmployees);

router.get("/:id", getEmployeeById);

router.post("/", registerEmployeeMiddleware, createEmployee);

router.put("/:id", updateEmployeeById);

router.delete("/:id", deleteEmployeeById);

module.exports = router;
