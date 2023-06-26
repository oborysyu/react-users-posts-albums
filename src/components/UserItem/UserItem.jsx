import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./UserItem.css";
import { setSelectedUser, setShowModal } from "../../store/userSlice";

// Here we take certain props; of course if necessary we can take others that we need
const UserItem = ({ id, username, name, email, phone, address, website }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="user_item">
      <p>
        <b>{name}</b>
      </p>
      <p>
        <i>{username}</i>
      </p>
      <hr />
      <p>
        &#8962; {address.city}, {address.street}, {address.suite}
      </p>
      <p>&#9742; {phone} </p>
      <p>&#9993; {email}</p>
      <p>&#128376; {website}</p>

      <br />

      <button
        onClick={() => {
          dispatch(setSelectedUser(id));
          navigate("/posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          dispatch(setSelectedUser(id));
          dispatch(setShowModal(true));
        }}
      >
        Albums
      </button>
    </div>
  );
};

export default UserItem;
