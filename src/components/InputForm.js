import React, { useState } from "react";
import * as TodoActions from "../actions/TodoActions";

const InputForm = ({members}) => {
  const status = "entry";
  const nameList = members.map(item => item.name)

  const [name, setName] = useState("");
  const [todoText, setTodoText] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeTodoText = (e) => setTodoText(e.target.value);

  const nameListTags = nameList.map((item, index) => {
    return (
      <option key={index} value={item} />
    );
  });

  const handleClick = () => TodoActions.createTodo({
    name: name,
    todoText: todoText,
    status: status,
  });

  return (
    <div>
      <label>
        Name:
        <input id="name" list="name_list"
         onChange={handleChangeName}
        />
        <datalist id="name_list">
          {nameListTags}
        </datalist>
      </label>
      <p>Todo:</p>
      <textarea id="todoText" rows="4" cols="40"
         defaultValue="Input todos here"
         onChange={handleChangeTodoText}
      />
      <div>
        <button onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputForm
