import React from "react";
import Todos from "./Todos";

export default class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTodos: false,
    };
  }

  handleClick() {
    this.setState({
      showTodos: !this.state.showTodos,
    })
  }

  render() {
    const desc = this.state.showTodos ? 'Hide' : 'Show';
    return (
      <div>
        {this.props.name} : 
        <button onClick={() => this.handleClick() }>{desc}</button>
        { this.state.showTodos ? <Todos todos={this.props.todos} /> : null }
      </div>
    );
  }
}
