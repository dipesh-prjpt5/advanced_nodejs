const mongoose = require("mongoose");

const Admin = require("../models/Admin.js");

require("dotenv").config();

const setUpApp = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);

    const demoAdmin = {
      email: "admin@text.com",
      password: "123456",
    };

    const result = await new Admin(demoAdmin).save();

    console.log("Admin saved:", result);
  } catch (err) {
    console.error("Error:", err);
  }
};

setUpApp();
