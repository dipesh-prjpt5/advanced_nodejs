const express = require("express");
const mongoose = require("mongoose");

const apiRouters = require("./routes/api");

const app = express();

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE);

mongoose.connection.on("error", (error) => {
  console.error(`Error → : ${error.message}`);
});

app.use("/api", apiRouters);

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
});
