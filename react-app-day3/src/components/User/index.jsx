import { Link } from "react-router-dom";
import { users } from "./user";
export const Users = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-primary" to={`/users/${user.id}`}>
                  view
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
