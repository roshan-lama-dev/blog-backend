import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { encryptPassowrd } from "../utils/passwordEncrypt.js";

const router = express.Router();
// Register
router.post("/register", async (req, res) => {
  try {
    console.log(req.body.password);
    const result = await encryptPassowrd(req.body.password);
    console.log(result);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: result,
    });

    // res.send(user);
    const user = await newUser.save();
    // we are returning the result after the new user has been saved into the databse
    res.status(200).json(user);
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      return res.status(400).json("Please enter new user information");
    } else {
      res.status(500).json(error.message);
    }
  }

  //   console.log(user);
});

// Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    !user && res.status(400).json("Wrong Credentials");

    const vaidatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    console.log(vaidatePassword);
    !vaidatePassword && res.status(400).json("Please enter the right password");
    // console.log(user);
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
