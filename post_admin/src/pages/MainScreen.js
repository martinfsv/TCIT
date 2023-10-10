import { useState } from "react";
import PostTable from "../components/PostTable";
import CreatePost from "../components/CreatePost";
import SearchPost from "../components/SearchPost";

function MainScreen(props) {
  const [searchString, setSearchString] = useState("");
  return (
    <div>
      <SearchPost setSearchString={setSearchString}></SearchPost>
      <PostTable searchString={searchString} posts={props.posts}></PostTable>
      <CreatePost></CreatePost>
    </div>
  );
}

export default MainScreen;
