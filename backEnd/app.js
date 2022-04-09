const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json());

app.use(cookieParser());

//Router Import
const book = require('./routes/bookRoute')
const user = require("./routes/userRoute")
const order = require('./routes/orederRoute')

app.use("/api/v1", book);
app.use("/api/v1", user)
app.use('/api/v1',order)







module.exports = app