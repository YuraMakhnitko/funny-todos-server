import express from "express";
import { register, login, getMe } from "./users.controller";
import { validations, validationErrors } from "../../services";
import { checkAuth } from "../../services/checkAuth";
import { CheckAuthRouterProps } from "../types";

const { registerValidation, loginValidation } = validations;

const usersRouter = express.Router();

usersRouter.post("/register", registerValidation, validationErrors, register);
usersRouter.post("/login", loginValidation, validationErrors, login);
usersRouter.get("/authme", checkAuth as CheckAuthRouterProps, getMe);

export { usersRouter };
