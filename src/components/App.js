import React, { useState, useEffect } from "react";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";
import InputForm from "./InputForm";
import MemberList from "./MemberList";

const App = () => {
  const [todos, setTodos] = useState(TodoStore.getAll())

  function handleSetTodos() { setTodos(TodoStore.getAll()) }

  useEffect(() => {
    // event DidMount
    TodoStore.on("change", handleSetTodos);
    TodoActions.getAllTodo();
    return function cleanup() {
      // event WillUnMount
      TodoStore.removeListener("change", handleSetTodos);
    };
  }, []);

  return (
    <div>
      <InputForm />
      <hr/>
      <MemberList todos={todos} />
    </div>
  )
}

export default App
