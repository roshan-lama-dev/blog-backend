import express from "express";
import dotnev from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { mongoDbConnection } from "./src/config/dbConfig.js";

import autRouter from "./src/routes/auth.js";
import userRouter from "./src/routes/users.js";
import postRouter from "./src/routes/posts.js";
const app = express();
const PORT = 8080;
dotnev.config();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

mongoDbConnection();
app.get("/", (req, res) => {
  res.send("Hello form the router");
});

app.use("/api/v1/auth", autRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/posts", postRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`The server is running on http://localhost:${PORT}`);
});
