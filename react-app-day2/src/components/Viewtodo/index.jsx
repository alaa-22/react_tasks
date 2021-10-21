import {Todo} from "../Todo";
export const Viewtodo = (props) => {
  return (
    <>
      <h1>Hello from the app</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
      delete </button>
        {props.todos.map((p) => (
        <Todo title={p.title} desc={p.desc} />
      ))}
    </>
  );
};
