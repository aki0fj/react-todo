import React, { useState } from "react";
import * as MemberActions from "../actions/MemberActions";

const EditMemberForm = () => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangePriority = (e) => setPriority(e.target.value);

  const handleClick = () => MemberActions.createMember({
    name: name,
    priority: priority,
  });

  return (
    <div>
      <label>
        Name:
        <input id="member-name"
         onChange={handleChangeName}
        />
      </label>
      <label>
        Priority:
        <input id="priority"
         onChange={handleChangePriority}
        />
      </label>
      <div>
        <button onClick={handleClick}>
          MemberAdd
        </button>
      </div>
    </div>
  );
}

export default EditMemberForm
