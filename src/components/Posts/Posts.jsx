import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByUserId } from "../../store/userSlice";
import "./Posts.css";
import PostItem from "../PostItem/PostItem";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.app.posts);

  useEffect(() => {
    dispatch(fetchPostsByUserId());
  }, [dispatch]);
  return (
    <div className="posts_list">
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
