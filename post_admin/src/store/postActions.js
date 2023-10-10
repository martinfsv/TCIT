import { postActions } from "./postSlice";

export const fetchPostData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/posts");
      if (!response.ok) {
        throw new Error("No se pueden obtener los posts");
      }
      const data = await response.json();
      return data;
    };

    try {
      const postData = await fetchData();
      dispatch(postActions.getAllPosts(postData));
    } catch (error) {}
  };
};

export const insertPostData = (newPost) => {
  return async (dispatch) => {
    const sendPost = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      };

      const response = await fetch(
        "http://localhost:3001/posts",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(
          "Hubo un error al insertar información en la base de datos"
        );
      }
      const data = await response.json();
      const uploadedPost = {
        id: data.id,
        name: data.name,
        description: data.description
      }
      return uploadedPost
    };

    try {
      const uploadedPost = await sendPost();
      dispatch(postActions.insertPost(uploadedPost));
    } catch (error) {
      console.log("Hubo un error al insertar información en la base de datos");
    }
  };
};

export const deletePostData = (id) => {
  return async (dispatch) => {
    const sendDelete = async () => {
      const requestOptions = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://localhost:3001/posts/${id}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(
          "Hubo un error al insertar información en la base de datos"
        );
      }
    };

    try {
      await sendDelete();
      dispatch(postActions.deletePost(id));
    } catch (error) {
      console.log("Hubo un error al eliminar información en la base de datos");
    }
  };
};
