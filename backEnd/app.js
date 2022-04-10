const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//Router Import
const book = require('./routes/bookRoute')
const user = require("./routes/userRoute")
const order = require('./routes/orederRoute')

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use("/api/v1", book);
app.use("/api/v1", user)
app.use('/api/v1',order)




module.exports = app