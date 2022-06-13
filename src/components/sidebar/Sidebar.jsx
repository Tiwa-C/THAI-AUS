import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";
import axios from 'axios';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Us</span>
        <img
          src={require('../images/TA-logo.png')} 
          alt=""
        />
        <p>
          Thai-Aus website for Thais in Australia
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Tags</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link key={c.name} to={`/tags/?cat=${c.name}`} className='link'>
              <li  className="sidebarListItem">{c.name}</li>
            </Link>  
          ))}
        </ul>  
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">Contact</span>
        <p className="email">thaiaus.com@gmail.com</p>
      </div>
      </div>
  );
}