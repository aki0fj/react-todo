import dispatcher from "../dispatcher";

export function createTodo(data) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    data,
  });
}

export function updateTodo(data) {
  dispatcher.dispatch({
    type: "UPDATE_TODO",
    data,
  });
}

export function deleteTodo(number) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    number,
  });
}
