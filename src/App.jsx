import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import { useEffect } from "react";
import { fetchUsers } from "./store/userSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import Posts from "./components/Posts/Posts";
import Loader from "./components/Loader/Loader";

function App() {
  const { status, error, showModal } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <Loader/>}
      {error && <h2>An error occured: {error}</h2>}
      <Modal active={showModal} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
