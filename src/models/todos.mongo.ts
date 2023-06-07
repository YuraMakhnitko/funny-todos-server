import mongoose, { Schema, model } from "mongoose";
import { TodosProps } from "./types";

const todosSchema = new Schema<TodosProps>(
  {
    todoText: String,
    completed: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

export const TodosModel = model<TodosProps>("todo", todosSchema);
