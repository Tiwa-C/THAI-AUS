import React from 'react';
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="announcement">
        WELCOME TO THAI-AUS 
      </div>

      <div className="headerTitles">
        <span className="headerTitleSm">Thai-Aus</span>
        <span className="headerTitleLg">เว็บคนไทย เพื่อคนไทย</span>
      </div>
      <img 
        className='headerImg'
        src={require('../images/banner1.png')} 
        alt=''
        />
    </div>
  );
}