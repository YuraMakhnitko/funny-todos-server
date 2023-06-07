import mongoose from "mongoose";

export interface UsersProps {
  name: string;
  email: string;
  password: string;
  passwordHash: string;
  _id: string;
}

export interface TodosProps {
  todoText: string;
  completed: boolean;
  user: mongoose.Schema.Types.ObjectId;
  _id: string;
}
