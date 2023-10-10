import { useEffect, useState } from "react";
import PostRow from "./PostRow";
import classes from "./PostTable.module.css";

function PostTable(props) {
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    const posts = props.posts;
    const searchString = props.searchString;

    const filteredPosts = posts.filter((post) => {
      const re = new RegExp(searchString, "gi");
      return re.test(post.name);
    });

    setVisiblePosts(filteredPosts);
  }, [props.searchString, props.posts]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerContainer}>
        <div className={classes.postDataHeader}>
          <div className={classes.nameHeader}>Name</div>
          <div className={classes.descriptionHeader}>Description</div>
        </div>
        <div className={classes.actionHeader}>
          Action
        </div>
      </div>
      {visiblePosts.length > 0 ? (
        visiblePosts.map((post) => {
          return (
            <div key={post.id} className={classes.postRow}>
              <PostRow post={post}></PostRow>
            </div>
          );
        })
      ) : (
        <div className={classes.noPosts}>There's no Posts yet :C, Add one!</div>
      )}
    </div>
  );
}

export default PostTable;
