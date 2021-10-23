import { useState } from "react";
import {Input} from "../Input";

export const Addtodo = (props) => {
  const [title, setTitle] = useState("TODO Title");
  const [desc, setdesc] = useState("TODO description");
const handleSubmit = () => {
    console.log(title, desc );
    props.addtodo({ title, desc });
  };

  return (
    <div className="card">
      <h1> Add Todo </h1>
      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={desc} setValue={setdesc} label="description" />
      <button onClick={handleSubmit} className="btn btn-primary m-2">
          add
      </button>
    </div>
  );
};
