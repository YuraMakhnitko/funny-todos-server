import express from "express";
import { validations, validationErrors } from "../../services";

const { todoValidation } = validations;

import {
  addOneTodo,
  getlistsTodos,
  removeOneTodo,
  completedToggleTodo,
} from "./todos.controller";

const todosRouter = express.Router();

todosRouter.post("/addtodo", todoValidation, validationErrors, addOneTodo);
todosRouter.post("/gettodos", getlistsTodos);
todosRouter.delete("/removetodo/:todoId", removeOneTodo);
todosRouter.patch("/updatetodo/:todoId", completedToggleTodo);

export { todosRouter };
