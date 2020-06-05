import { EventEmitter } from "events";

class MemberStore extends EventEmitter {
  constructor() {
    super();
    this.members = [];
  }

  getAll() {
    return this.members.sort((a, b) => a.priority - b.priority);
  }

  setAllMember(data) {
    this.members = data;
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "SET_ALL_MEMBER": {
        this.setAllMember(action.data);
        break;
      }
      default:
    }
  }
}

const memberStore = new MemberStore();

export default memberStore;
