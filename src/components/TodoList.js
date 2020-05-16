import React from "react";

export default class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map((item, index) => {
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
            onClick={() => this.props.handleClick(item.number, desc)}
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
}
