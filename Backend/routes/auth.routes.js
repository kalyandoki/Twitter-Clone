import express from "express";
import {
  getme,
  signup,
  login,
  logout,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const rounter = express.Router();

rounter.get("/me", protectRoute, getme);
rounter.post("/signup", signup);
rounter.post("/login", login);
rounter.post("/logout", logout);

export default rounter;
