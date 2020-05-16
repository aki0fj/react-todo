import React from "react";
import Member from "./Member";

export default class MemberList extends React.Component {
  render() {
    // todos --> group by name
    const nameList = this.props.todos.reduce((result, current) => {
      const element = result.find((p) => p === current.name);
      if (!element) {
        result.push(current.name);
      }
      return result;
    }, []);

    const members = nameList.map((item, index) => {
      const todos = this.props.todos.filter(todo => todo.name === item);
      return (
        <Member key={index} name={item} todos={todos} />
      );
    });

    return (
      <div>
        {members}
      </div>
    );
  }
}
