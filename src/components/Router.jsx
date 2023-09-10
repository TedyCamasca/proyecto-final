import { Routes, Route } from "react-router-dom";
import { Posts } from "../pages/Posts/Posts";
import { PostDetail } from "../pages/Posts/PostDetail";
import { Comments } from "../pages/Comments/Comments";
import { CommentDetail } from "../pages/Comments/CommentDetail";
import { Albums } from "../pages/Albums/Albums";
import { Users } from "../pages/Users/Users";
import { UserDetail } from "../pages/Users/UserDetail";
import { AlbumDetail } from "../pages/Albums/AlbumDetail";
import { Photos } from "../pages/Photos/Photos";
import { PhotoDetail } from "../pages/Photos/PhotoDetail";
import { Todos } from "../pages/Todos/Todos";
import { TodoDetail } from "../pages/Todos/TodoDetail";
import { Home } from "../pages/Home";
import { Layout } from "./Layout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/:id" element={<CommentDetail />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:id" element={<AlbumDetail />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/photos/:id" element={<PhotoDetail />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
      </Route>
    </Routes>
  );
};
