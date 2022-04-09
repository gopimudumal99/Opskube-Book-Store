const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require('./configs/db')


//unhandle UnCaught Exeception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to UnCaught Exception `);
  process.exit(1);
});


// config
dotenv.config({ path: "backEnd/configs/config.env" });


//Conecting DataBase
connectDataBase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Listing on port http://localhost:${process.env.PORT}`);
});


// Unhandle Promise Rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandle Promise Rejections`);
  server.close(() => {
    process.exit(1);
  });
});
