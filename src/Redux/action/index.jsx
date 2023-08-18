import { show_todo, hide_todo } from "./todoFormShowType";

// Todo (Show / Hide)
export const showTodo = () => {
  return { type: show_todo };
};
export const hideTodo = () => {
  return { type: hide_todo };
};
