import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];
  }

  getAll() {
    return this.todos;
  }

  setAllTodo(data) {
    this.todos = data;
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "SET_ALL_TODO": {
        this.setAllTodo(action.data);
        break;
      }
      default:
    }
  }
}

const todoStore = new TodoStore();

export default todoStore;
