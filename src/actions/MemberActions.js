import dispatcher from "../dispatcher";

export function getAllMember() {
  fetch("http://192.168.52.129:3001/members") 
    .then( response => response.json() ) 
    .then( data => { 
      dispatcher.dispatch({
        type: "SET_ALL_MEMBER",
        data,
      })
    });
}

export function createMember(data) {
  fetch("http://192.168.52.129:3001/members", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      priority: data.priority
    })
  })
  .then( this.getAllMember )
}

export function updateMember(data) {
  fetch("http://192.168.52.129:3001/members/" + data.id, {
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
  .then( this.getAllMember )
}

export function deleteMember(data) {
  fetch("http://192.168.52.129:3001/members/" + data.id, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      todoText: data.todoText,
      status: data.status
    })
  })
  .then( this.getAllMember )
}
