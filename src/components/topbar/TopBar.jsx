import React from 'react';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import "./topbar.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useState } from 'react';

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5000/images/'

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleTop = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <div className="top">
      <div className="topLeft">
        <img
          className='topLogo'
          src={require('../images/TA-logo.png')}
          alt=''
        />
        <h2>THAI-AUS</h2>
      </div>
      <div className="topCenter">
        {(toggleMenu || screenWidth > 835) && (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                Home
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/tags">
                Tags
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/write">
                Create Post
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>{user && 'Logout'}</li>
          </ul>
        )}
      </div>

      <div className="topRight">
        {user ? (
          <Link className="link" to={`/settings?user=${user._id}`} >
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt=""
            />
          </Link>

        ) : (
          <ul className="topListRight">
            <li className="topListItemRight">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItemRight">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <div onClick={toggleTop} className="btn">
          <MenuOutlinedIcon />
        </div>
      </div>
    </div>
  );
}