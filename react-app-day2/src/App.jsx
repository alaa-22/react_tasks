import { useState, useEffect } from "react";
import { Viewtodo } from "./components/Viewtodo";
import {Addtodo  } from "./components/Addtodo";

export const App = () => {
  const [todos, settodos] = useState([]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
  //     setPosts(result.data);
  //   });
  // }, [posts]);

  const handleDelete = () => {
    settodos([]);
  };

  const addtodo = (newtodo) => {
    settodos([...todos, newtodo]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Addtodo addtodo={addtodo} />
        </div>
        <div className="col-6">
          <Viewtodo
            todos={todos}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
