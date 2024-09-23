import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Sidebar from "../components/Sidebar";
import "./App.css";
import CreatePost from "../components/CreatePost";
import PostListProvider from "../store/post-list-store";
import ArangePosts from "../components/ArangePosts";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <HeaderComponent />
          {/* {selectedTab === "home" && <ArangePosts />}
          {selectedTab === "create post" && <CreatePost />} */}
          <Outlet />

          <FooterComponent />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
