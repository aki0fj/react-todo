import React, { useState, useEffect } from "react";
import TodoStore from "../stores/TodoStore";
import MemberStore from "../stores/MemberStore";
import * as TodoActions from "../actions/TodoActions";
import * as MemberActions from "../actions/MemberActions";
import EditMemberForm from "./EditMemberForm";
import InputForm from "./InputForm";
import MemberList from "./MemberList";

const App = () => {
  const [todos, setTodos] = useState(TodoStore.getAll())
  function handleSetTodos() { setTodos(TodoStore.getAll()) }
  const [members, setMembers] = useState(MemberStore.getAll())
  function handleSetMembers() { setMembers(MemberStore.getAll()) }

  useEffect(() => {
    // event DidMount
    TodoStore.on("change", handleSetTodos);
    TodoActions.getAllTodo();
    MemberStore.on("change", handleSetMembers);
    MemberActions.getAllMember();
    return function cleanup() {
      // event WillUnMount
      TodoStore.removeListener("change", handleSetTodos);
      MemberStore.removeListener("change", handleSetMembers);
    };
  }, []);

  return (
    <div>
      <EditMemberForm />
      <hr/>
      <InputForm members={members} />
      <hr/>
      <MemberList todos={todos} members={members.map(item => item.name)} />
    </div>
  )
}

export default App
