import { useState } from "react";
import { useDispatch } from "react-redux";
import { insertPostData } from "../store/postActions";
import classes from "./CreatePost.module.css";

function CreatePost() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const addPost = (post) => {
    if (name!=="" && description!=="") {
      dispatch(insertPostData(post));
    }
  };

  return (
    <div className={classes.addContainer}>
      <div className={classes.postData}>
        <div className={classes.name}>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className={classes.description}>
          <input
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button
          className={classes.delete}
          onClick={() => {
            const post = {
              name: name,
              description: description,
            };
            addPost(post);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
