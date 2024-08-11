import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../filebase';
import {useNavigate } from "react-router-dom";


const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () =>{
    //ログアウト
   signOut(auth).then(()=>{
    localStorage.clear();
    setIsAuth(false);
    navigate("/login");
   });
   };
  return (
    <div>
      <p>ログアウト始める</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
}

export default Logout