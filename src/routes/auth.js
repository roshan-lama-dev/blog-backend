import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    // res.send(user);
    const user = await newUser.save();
    // we are returning the result after the new user has been saved into the databse
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }

  //   console.log(user);
});

export default router;
