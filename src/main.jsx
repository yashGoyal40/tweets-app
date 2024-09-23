import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost from "./components/CreatePost.jsx";
import ArangePosts from "./components/ArangePosts.jsx";

const route = createBrowserRouter([
  { path: "/", element: <App /> , children: [
    { path: "/", element: <ArangePosts />},
    { path: "/create-post", element: <CreatePost /> },
  ]},
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
