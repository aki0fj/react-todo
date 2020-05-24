import React from "react";

const TodoList = (args) => {
  const todos = args.todos.map((item, index) => {
    let desc = "";
    switch (item.status) {
    case "entry":
      desc = "progress";
      break;
    case "progress":
      desc = "done";
      break;
    case "done":
      desc = "confirm";
      break;
    default:
    } 
    return (
      <li key={index} >
        { item.todoText } :
        <button
          onClick={() => args.handleClick(item.id, desc)}
        >{desc}</button>
      </li>
    );
  });

  return (
    <div>
      <ul>{todos}</ul>
    </div>
  );
}

export default TodoList
