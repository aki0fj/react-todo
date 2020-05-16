import React from "react";
import TodoList from "./TodoList";

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    };
  }

  handleClick(number, status) {
    const todos = this.state.todos.slice();
    todos.find(todo => todo.number === number).status = status;
    this.setState({ todos: todos });
  }

  render() {
    const todos = this.props.todos;
    const entry = todos.filter(todo => todo.status === "entry");
    const progress = todos.filter(todo => todo.status === "progress");
    const done = todos.filter(todo => todo.status === "done");
    const handleClick = this.handleClick.bind(this);

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
}
