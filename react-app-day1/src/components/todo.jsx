export const Todo = (props) => {
    return (
      <div>
        <h4>{props.title}</h4>
        <img src={props.src} alt="" />
        <p>{props.body}</p>
      </div>
    );
  };
  