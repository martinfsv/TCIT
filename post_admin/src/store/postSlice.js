import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [] },
  reducers:{
    getAllPosts(state, action){
      const allPosts = action.payload;
      state.posts = allPosts
    },
    insertPost(state, action){
      const newPost = action.payload
      state.posts = [...state.posts, newPost]
    },
    deletePost(state, action){
      const deletedPostId = action.payload
      const newPosts = state.posts.filter((post) => post.id !== deletedPostId)
      state.posts = newPosts;
    },
  }
});

export const postActions = postSlice.actions;
export default postSlice;
