import express from "express";
import dotnev from "dotenv";
import cors from "cors";
import morgan from "morgan";
const app = express();
const PORT = 8080;
dotnev.config();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`The server is running on http://localhost:${PORT}`);
});
