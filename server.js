const express = require("express");
require("dotenv").config();
const app = express();
const port = 5500;
const path = require("path");
const { logger } = require("./middleware/logEvents");
const cors = require("cors");
const router = require("./routes");
const errorHandaler = require("./middleware/errorHandaler");
//build in middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("static"));

//custom middleware
app.use(logger);
app.use(cors());

app.use(router);
app.use(errorHandaler);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
