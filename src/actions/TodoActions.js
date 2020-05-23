import dispatcher from "../dispatcher";

export function getAllTodo() {
  fetch("http://192.168.52.129:3001/tasks") 
    .then( response => response.json() ) 
    .then( data => { 
      dispatcher.dispatch({
        type: "SET_ALL_TODO",
        data,
      })
    });
}

export function createTodo(data) {
  fetch("http://192.168.52.129:3001/tasks", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      todoText: data.todoText,
      status: data.status
    })
  })
  .then( this.getAllTodo )
}

export function updateTodo(data) {
  fetch("http://192.168.52.129:3001/tasks/" + data.id, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      todoText: data.todoText,
      status: data.status
    })
  })
  .then( this.getAllTodo )
}
