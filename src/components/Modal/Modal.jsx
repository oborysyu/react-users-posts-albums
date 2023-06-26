import { useDispatch, useSelector } from "react-redux";
import "./Modal.css";
import { fetchAlbumsByUserId, setShowModal } from "../../store/userSlice";
import { useEffect } from "react";

const Modal = ({ active }) => {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.app.albums);
  const isOpened = useSelector((state) => state.app.showModal);

  useEffect(() => {
    if (isOpened) dispatch(fetchAlbumsByUserId());
  }, [dispatch, isOpened]);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => dispatch(setShowModal(false))}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="albums_title">List of albums:</h5>
        {albums.map((album) => (
          <div key={album.id}>
            {album.id} - {album.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Modal;
