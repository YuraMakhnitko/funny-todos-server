import express from "express";
import { usersRouter } from "./users/users.router";
import { todosRouter } from "./todos/todos.router";

export const appRoutter = express.Router();
appRoutter.use(usersRouter, todosRouter);
