import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainScreen from "./pages/MainScreen.js";
import { fetchPostData } from "./store/postActions.js";
import classes from "./App.module.css"

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  
  useEffect(() => {
    console.log("Obtuve todos los posts")
    dispatch(fetchPostData());
  }, [dispatch]);
  
  return <div className={classes.mainContainer}>
    <MainScreen posts={posts} />
  </div>;
}

export default App;
