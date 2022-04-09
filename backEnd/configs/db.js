const mongoose = require("mongoose")

const conectDataBase = () => {
    mongoose.connect(process.env.DB_URL).then((data) => { 
        console.log(`MongoDB connected with the server ${data.connection.host}`)
    })
}

module.exports = conectDataBase