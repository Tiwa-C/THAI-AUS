import React from 'react';
import Categories from "../../components/categories/Categories";
import Posts from "../../components/posts/Posts";
import "./tags.css";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Tags() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  
  return (
    <>
      <div className="tags">
        <Categories />
      </div>
      <Posts posts={posts} />
    </>
  );
}