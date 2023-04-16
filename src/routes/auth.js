import express from "express";
import User from "../models/User.js";
import { eventWrapper } from "@testing-library/user-event/dist/utils/index.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = await new User(req.body);
    res.send(user);
  } catch (error) {
    console.log(error);
  }

  //   console.log(user);
});
