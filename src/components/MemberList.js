import React from "react";
import Member from "./Member";

const MemberList = ({todos, members}) => {
  const membersView = members.map((item, index) => {
    const MembersTodos = todos.filter(todo => todo.name === item);
    return (
      MembersTodos.length === 0 ? null :
      <Member key={index} name={item} todos={MembersTodos} />
    );
  });

  return (
    <div>
      {membersView}
    </div>
  );
}

export default MemberList
