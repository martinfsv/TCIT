import { useDispatch } from "react-redux";
import { deletePostData } from "../store/postActions";
import classes from "./PostRow.module.css";

function PostRow(props) {
  const dispatch = useDispatch();
  const name = props.post.name;
  const description = props.post.description;
  const deleteRow = () => {
    dispatch(deletePostData(props.post.id));
  };

  return (
    <div className={classes.rowContainer}>
      <div className={classes.postData}>
        <div className={classes.name}>{name}</div>
        <div className={classes.description}>{description}</div>
      </div>
      <div>
        <button className={classes.delete} onClick={deleteRow}>Delete</button>
      </div>
    </div>
  );
}

export default PostRow;
