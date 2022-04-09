const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json());

app.use(cookieParser());

//Router Import
const book = require('./routes/bookRoute')
const user = require("./routes/userRoute")

app.use("/api/v1", book);
app.use("/api/v1", user)







module.exports = app