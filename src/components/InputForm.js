import React from "react";

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      todoText: "",
      status: "entry",
      nameList: ['member A', 'member B', 'member C'],
    };
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    })
  }

  handleChangeTodoText(e) {
    this.setState({
      todoText: e.target.value,
    })
  }

  render() {
    const nameList = this.state.nameList.map((item, index) => {
      return (
        <option key={index} value={item} />
      );
    });
    const formData = {
      name: this.state.name,
      todoText: this.state.todoText,
      status: this.state.status,
    };
    return (
      <div>
        <label>
          Name:
          <input id="name" list="name_list"
           onChange={this.handleChangeName.bind(this)}
          />
          <datalist id="name_list">
            {nameList}
          </datalist>
        </label>
        <p>Todo:</p>
        <textarea id="todoText" rows="4" cols="40"
           defaultValue="Input todos here"
           onChange={this.handleChangeTodoText.bind(this)}
        />
        <div>
          <button onClick={() => this.props.onClick(formData)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
