import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import CreatePost from "./CreatePost.jsx";
import ShowPost from "./ShowPost.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/post/1" element={<ShowPost />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
