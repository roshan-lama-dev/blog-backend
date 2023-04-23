import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { encryptPassowrd } from "../utils/passwordEncrypt.js";

const router = express.Router();
// Update User Information
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(401).json("You are not authorised");
  }
});

export default router;
