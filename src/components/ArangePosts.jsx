import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import FetchPosts from "./FetchPosts";
import FetchingSpinner from "./FetchingSpinner";

function ArangePosts() {
  const { postList, addInnitialPosts } = useContext(PostList);
  const [fetching, setFetching] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false); 


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (postList.length === 0) {
      setFetching(true);

      fetch("https://dummyjson.com/posts",{signal})
        .then((res) => res.json())
        .then((data) => {
          addInnitialPosts(data.posts);
          setFetching(false);
          setDataLoaded(true);
        })
        .catch(() => {
          setFetching(false);
          setDataLoaded(true);
        });
    }
    // return () => {
    //   console.log('cleanup function called')
    //   controller.abort();
    // }
  }, []);

  return (
    <div className="container">
      <div className="row">
        {fetching && <FetchingSpinner />}
        
        {!fetching && dataLoaded && postList.length === 0 && (
          <FetchPosts />
        )}
        {postList.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <div className="post-card">
              <Post post={post} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArangePosts;
