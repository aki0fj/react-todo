import React from "react";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";
import InputForm from "./InputForm";
import MemberList from "./MemberList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  componentDidMount() {
    TodoStore.on("change", this.getTodos);
    console.log("TodoStore.listenerCount", TodoStore.listenerCount("change"));
    TodoActions.getAllTodo();
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  handleClick(formData) {
    TodoActions.createTodo(formData);
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
