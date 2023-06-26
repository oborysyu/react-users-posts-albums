import "./PostItem.css";

const PostItem = ({ title, body, id }) => {
  return (
    <div className="post_item">
      <div className="post_id">post id = {id}</div>
      <h3>{title}</h3>
      {body}
    </div>
  );
};

export default PostItem;
