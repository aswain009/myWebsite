import React from 'react';
import './CSS/App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import PostForm from './Components/PostForm.js';
import PostList from './Components/PostList.js';
import {useState} from "react";
import StorePost from "./Components/StorePost";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
      setPosts([...posts, newPost]);
  };



  return (
      <div>
        <Header />
          <div className="container">
              <PostForm addPost={addPost} />
              <PostList posts={posts} />
          </div>
          <StorePost posts={posts} />
        <Footer />
      </div>
  );
}

export default App;

