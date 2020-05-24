import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

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
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;
export default todoStore;
