import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInnitialPosts: () => {},
});


const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  }
  if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currentPostList]
  }
  if(action.type === "ADD_INNITIAL_POST"){
    newPostList = action.payload.posts
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userID,postTitle,postBody,tags) => {
    console.log(userID, postTitle, postBody, tags);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: 0,
        userId: userID,
        tags: tags,
      }
    });
  };

  const addInnitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INNITIAL_POST",
      payload: {
        posts,
      }
    });
  };

  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addInnitialPosts
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
