import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";
import "./UsersList.css";

const UsersList = () => {
  const users = useSelector((state) => state.app.users);

  return (
    <div className="users_list">
      {users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UsersList;
