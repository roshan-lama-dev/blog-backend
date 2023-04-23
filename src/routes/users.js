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

// Delete
router.delete("/:id", async (req, res) => {
  if (req.body.id === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User account is deleted");
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(401).json("You are not authorised");
  }
});

// Get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
