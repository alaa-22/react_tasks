import { useHistory } from "react-router-dom";
export const HomeButton = (props) => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/home");
    console.log(props.email, props.message);
  };
  return (
    <button className="btn btn-primary" type="button" onClick={handleClick}>
      Go home
    </button>
  );
};
