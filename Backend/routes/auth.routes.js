import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const rounter = express.Router();

rounter.post("/signup", signup);

rounter.post("/login", login);

rounter.post("/logout", logout);

export default rounter;
