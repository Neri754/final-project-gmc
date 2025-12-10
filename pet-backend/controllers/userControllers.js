import { userModel } from "../models/userModels.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

export async function registeredUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (validator.isEmpty(name))
      return res.status(400).json({ message: "Name is required" });
    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Invalid email" });
    if (!validator.isStrongPassword(password, { minLength: 6 }))
      return res.status(400).json({ message: "Weak password" });

    const exists = await userModel.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await userModel.create({ name, email, password: hashed });

    res.status(201).json({ message: "Account created", user });
  } catch (error) {
    res.status(400).json({ message: "Error occurred", error });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
