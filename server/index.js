import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Router from "./routes/route.js";
import DefaultData from "./default.js";
import cors from "cors";
import bodyParser from "body-parser";

const port = process.env.PORT || 8000;
const app = express();
dotenv.config();
Connection();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.listen(port, () => {
  console.log("listening");
});

DefaultData();
