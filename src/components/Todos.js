import React from "react";
import * as TodoActions from "../actions/TodoActions";
import TodoList from "./TodoList";

const Todos = (args) => {
  const todos = args.todos;

  const handleClick = (id, status) => {
    const todo = todos.find(todo => todo.id === id)
    todo.status = status;
    TodoActions.updateTodo(todo);
  }

  const entry = todos.filter(todo => todo.status === "entry");
  const progress = todos.filter(todo => todo.status === "progress");
  const done = todos.filter(todo => todo.status === "done");

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Entry</th>
            <th>Progress</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><TodoList todos={entry} handleClick={handleClick} /></td>
            <td><TodoList todos={progress} handleClick={handleClick} /></td>
            <td><TodoList todos={done} handleClick={handleClick} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Todos
