import express from "express";

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = req.body();
  console.log(user);
});
