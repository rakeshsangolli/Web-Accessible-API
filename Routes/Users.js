import express from "express";

import {
  createUser,
  findUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controller/users.js";
const router = express.Router();

//All router from here are staring from /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", findUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);
export default router;
