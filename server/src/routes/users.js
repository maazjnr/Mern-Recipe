import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {

    const { username, password } = req.body;

  const userData = new UserModel({
    username,
    password,
  });

  res.json(userData);

});

router.post("/login");

export { router as userRouter };
