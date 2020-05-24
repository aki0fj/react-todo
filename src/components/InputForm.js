import React, { useState } from "react";

const InputForm = (args) => {
  const status = "entry";
  const nameList = ['member A', 'member B', 'member C'];

  const [name, setName] = useState("");
  const [todoText, setTodoText] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeTodoText = (e) => setTodoText(e.target.value);

  const nameListTags = nameList.map((item, index) => {
    return (
      <option key={index} value={item} />
    );
  });

  const formData = {
    name: name,
    todoText: todoText,
    status: status,
  };

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
        <button onClick={() => args.onClick(formData)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputForm
