import { useState } from "react";
import classes from "./SearchPost.module.css";

function SearchPost(props) {
  const [searchString, setSearchString] = useState("");

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchText}>
        <input
          type="text"
          value={searchString}
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
        />
      </div>
      <div className={classes.buttonContainer}>
        <button
          className={classes.filter}
          onClick={() => {
            props.setSearchString(searchString);
          }}
        >
          Filter
        </button>
        <button
          className={classes.clear}
          onClick={() => {
            setSearchString("");
            props.setSearchString("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default SearchPost;
