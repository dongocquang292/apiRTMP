const express = require('express');
const app = express();
const indexRouter = require("./route/index")
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter)

app.listen(8000, function () {
  console.log("Listening on port 8000!");

});