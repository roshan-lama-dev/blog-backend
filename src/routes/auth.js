import express from "express";
import User from "../models/User.js";
import { eventWrapper } from "@testing-library/user-event/dist/utils/index.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    // res.send(user);
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }

  //   console.log(user);
});
