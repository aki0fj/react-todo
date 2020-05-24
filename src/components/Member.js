import React, { useState } from "react";
import Todos from "./Todos";

const Member = (args) => {
  const [showTodos, setShowTodos] = useState(false);

  const desc = showTodos ? 'Hide' : 'Show';
    return (
      <div>
        {args.name} : 
        <button onClick={() => setShowTodos(!showTodos) }>{desc}</button>
        { showTodos ? <Todos todos={args.todos} /> : null }
      </div>
    );
}

export default Member
