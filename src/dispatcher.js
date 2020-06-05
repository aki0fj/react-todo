import { Dispatcher } from "flux";
import todoStore   from "./stores/TodoStore";
import memberStore from "./stores/MemberStore";

const dispatcher = new Dispatcher();
dispatcher.register(todoStore.handleActions.bind(todoStore));
dispatcher.register(memberStore.handleActions.bind(memberStore));

window.dispatcher = dispatcher;
export default dispatcher;
