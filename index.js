const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const studentRouter = require("./Routes/student");
const mentorRouter = require("./Routes/mentor");

main().catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(process.env.DATABASE);
  console.log(`connected to db`);
  app.use("/student", studentRouter);
  app.use("/mentor", mentorRouter);
}

app.listen(process.env.PORT_NUMBER || 5001, () => {
  console.log(`server is listening on port 5001`);
});