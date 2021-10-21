import { Card } from "../Card";

export const Todo = (props) => {
  return (

    <Card>
      <div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </Card>
  );
};
