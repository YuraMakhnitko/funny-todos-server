import { Request, Response } from "express";
import { TodosModel } from "../../models";
import { Document } from "mongoose";

export const addOneTodo = async (req: Request, res: Response) => {
  try {
    const todoText: string = req.body.todoText;
    const completed: boolean = req.body.completed;
    const user: string = req.body.user;
    const todo = (await new TodosModel({
      todoText,
      completed,
      user,
    }).save()) as Document;
    const { __v, ...todoData } = todo.toJSON();
    res.json({ ...todoData });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Can`t create todo!",
    });
  }
};

export const getlistsTodos = async (req: Request, res: Response) => {
  try {
    const idCompleted: Boolean = req.body.completed;
    const user: string = req.body.user;
    const listTodos = await TodosModel.find(
      { completed: idCompleted, user },
      { __v: 0 }
    );
    const arrayTodos = listTodos.map((todo) => {
      return todo.toJSON();
    });
    res.json(arrayTodos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Can`t find todos!",
    });
  }
};

export const removeOneTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.todoId;
    await TodosModel.findByIdAndDelete({ _id: id }).catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Can`t delete todo!",
      });
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Can`t get todo!",
    });
  }
};

export const completedToggleTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.todoId;
    const isCompleted: boolean = req.body.completed;

    await TodosModel.findOneAndUpdate(
      { _id: id },
      {
        completed: !isCompleted,
      }
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Can`t update todo!",
    });
  }
};
