import React, { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const [alertVisible, setAlertVisible] = useState(false);

  const navigate = useNavigate()

  const userIDElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();

  const HandleSubmit = (event) => {
    event.preventDefault();
    addPost(
      userIDElement.current.value,
      titleElement.current.value,
      bodyElement.current.value,
      tagsElement.current.value.split(" ")
    );
    
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleElement.current.value,
        body: bodyElement.current.value,
        reactions: 0,
        userId: userIDElement.current.value,
        tags: tagsElement.current.value.split(" "),
      }),
    })
      .then((res) => res.json())
      .then(console.log);

    userIDElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    tagsElement.current.value = "";


    setAlertVisible(true);

    setTimeout(() => setAlertVisible(false), 3000);
    navigate("/");

  };

  return (
    <>
      {alertVisible && <Alert setAlertVisible={setAlertVisible} />}
      <form
        className="p-4 border rounded shadow-lg mt-5 bg-white"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#f8f9fa",
        }}
        onSubmit={HandleSubmit}
      >
        <h2 className="text-center mb-4" style={{ color: "#343a40" }}>
          Create a New Post
        </h2>

        <div className="mb-4">
          <label htmlFor="userID" className="form-label fw-bold text-secondary">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userID"
            placeholder="Enter the name you want to display"
            ref={userIDElement}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="form-label fw-bold text-secondary">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Give an interesting title"
            ref={titleElement}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="body" className="form-label fw-bold text-secondary">
            Post Content
          </label>
          <textarea
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
            rows="6"
            style={{ resize: "none" }}
            ref={bodyElement}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="form-label fw-bold text-secondary">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter tags separated by spaces"
            ref={tagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 py-2">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
