const express = require("express");
const app = express();

//connectDB
const connectDB = require("./config/dbConnection");

//Routes File Imports
const employeeRoutes = require("./routes/employeeRoutes");

//Reading JSON File
// const users = require("./Users_Data.json");
// const { type } = require("os");

//Middleware
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/employees", employeeRoutes);

const port = 8000;
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is Running on Port ${port}...`);
});
