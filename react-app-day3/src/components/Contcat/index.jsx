import { Input } from "../Input";
import { useState } from "react";
import { HomeButton } from "../Button";

export const Contact = (props) => {
  const [title, setTitle] = useState("Type ur mail");
  const [message, setmesag] = useState("enter message");

  return (
    <div className="card">
      <h1> Add Todo </h1>
      <Input value={title} type="email" setValue={setTitle} label="email" />
      <Input value={message} type="text" setValue={setmesag} label="message" />
      <HomeButton email={title} message={message} />
    </div>
  );
};
