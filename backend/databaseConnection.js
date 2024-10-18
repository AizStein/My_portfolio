import mongoose from "mongoose";

export function databaseConnection() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database is ready!");
    })
    .catch((err) => {
      console.log(err);
    });
}
