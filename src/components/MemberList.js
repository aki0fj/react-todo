import React from "react";
import Member from "./Member";

const MemberList = ({todos}) => {

  // todos --> group by name
  const nameList = todos.reduce((result, current) => {
    const element = result.find((p) => p === current.name);
    if (!element) {
      result.push(current.name);
    }
    return result;
  }, []);

  const members = nameList.map((item, index) => {
    const MembersTodos = todos.filter(todo => todo.name === item);
    return (
      <Member key={index} name={item} todos={MembersTodos} />
    );
  });

  return (
    <div>
      {members}
    </div>
  );
}

export default MemberList
