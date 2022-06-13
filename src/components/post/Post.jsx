import React from 'react';
import { Link } from 'react-router-dom';
import "./post.css";

export default function Post({post}) {
  const PF = 'http://localhost:5000/images/';
  return (
    <div className="post" >
      {post.photo && 
      <img 
        className="postImg"
        src={PF + post.photo}
        alt=""
      />
      }
      <div className="postInfo">
          <span className="postCat">
            <Link to = {`/tags?cat=${post.categories}`} className='link'>
              {post.categories}
            </Link>
           </span> 
        <Link to={`/post/${post._id}`} className='link'>
          <span className="postTitle">{post.title}</span>
        </Link>
        
        <span className="postDate">{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
 );
}