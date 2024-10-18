import express from "express";
import "dotenv/config";
import cors from "cors";
import { databaseConnection } from "./databaseConnection.js";
import formRoutes from "./routes/formRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseConnection();

app.use("/portfolio", formRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server is listening..");
});
