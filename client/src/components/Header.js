import React, { useContext, useEffect } from 'react';
import {Link} from "react-router-dom";
import { UserContext } from '../Context/UserContext';

const Header = () => {

  // const [username,setUsername]=useState(null);
  const {userInfo,setUserInfo}=useContext(UserContext);
  const username=userInfo?.username;

  useEffect(()=>
  {
    fetch('https://insightly-backend.onrender.com/profile',
    {
      credentials: 'include'
    })
    .then(response=>
      {
        response.json()
        .then(userInfo=>
          {
            // setUsername(userInfo.username);
            setUserInfo(userInfo);
          })
      })
  },[]);

  function logout()
  {
    fetch('https://insightly-backend.onrender.com/logout',
    {
      credentials: 'include',
      method: "POST"
    });

    // setUsername(null);
    setUserInfo(null);
  }

  return (
    <header>
        <Link to="/" className="logo">
          Insightly
        </Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create new post</Link>
              <Link to="/" onClick={logout}>Logout</Link>
            </>
          )}

          {!username && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
  )
}

export default Header