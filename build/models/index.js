"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosModel = exports.UserModel = void 0;
const users_mongo_1 = require("./users.mongo");
Object.defineProperty(exports, "UserModel", { enumerable: true, get: function () { return users_mongo_1.UserModel; } });
const todos_mongo_1 = require("./todos.mongo");
Object.defineProperty(exports, "TodosModel", { enumerable: true, get: function () { return todos_mongo_1.TodosModel; } });
