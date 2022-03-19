import { useNavigate } from 'react-router-dom'
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext'
import React, { useContext } from "react";



export const LoginScreen = () => {
  
  const navitage = useNavigate();
const { dispatch } = useContext( AuthContext )

  const handleLogin = () => {
  

    const action = {
      type: types.login,
      payload:{ name: 'Fernando' }
    }

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/'


    navitage( lastPath , {
      replace:true
    });

  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={ handleLogin }
        >
          Login
      </button>
    </div>
  )
}
