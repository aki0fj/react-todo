import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];
    this.todoNumber = 0;
  }

  getAll() {
    return this.todos;
  }

  createTodo(data) {
    this.todoNumber += 1
    this.todos.push({
      number: this.todoNumber,
      name: data.name,
      todoText: data.todoText,
      status: data.status,
    });

    this.emit("change");
  }

  updateTodo(data) {
    let todo = this.todos.find(todo => todo.number === data.number)
    todo.name   = data.name;
    todo.todoText = data.todoText;
    todo.status = data.status;
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.data);
        break;
      }
      case "UPDATE_TODO": {
        this.updateTodo(action.data);
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
