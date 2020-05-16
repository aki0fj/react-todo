import React from "react";
import InputForm from "./InputForm";
import MemberList from "./MemberList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoNumber: 0,
    };
  }

  handleClick(formData) {
    const todos = this.state.todos.slice();
    this.setState({
      todos: todos.concat([{
        number: this.state.todoNumber,
        name: formData.name,
        todoText: formData.todoText,
        status: formData.status,
      }]),
      todoNumber: this.state.todoNumber + 1,
    });
  }

  render() {
    return (
      <div>
        <InputForm onClick={(formData) => this.handleClick(formData)} />
        <hr/>
        <MemberList todos={this.state.todos} />
      </div>
    );
  }
}
