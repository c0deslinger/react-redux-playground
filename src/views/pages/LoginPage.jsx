import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/ducks/auth/actions';
import * as TAG from "../../constant/tag";
import { useEffect } from 'react';
import {useNavigate } from 'react-router';
import withGuest from "../routes/hoc/withGuest";


function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //ambil value token
  const {token } = useSelector((state) => state.auth);

  let dispatch = useDispatch();
  let navigate = useNavigate()

  useEffect(() => {
    if(token){
      console.log("LoginPage login success get token", token)
      //redirect ke dashboard
      navigate('/dashboard')
    }
  }, [dispatch, navigate, token])


  const doLogin = (event) => {
    event.preventDefault();
    console.log(TAG.AUTH,"LoginPage start login with email:",email,"password:",password)
    dispatch(login(email, password))
  }


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={doLogin}>
        <input type="email" name={email} onChange={(event) => setEmail(event.target.value)} id="email" placeholder='user@gmail.com' />
        <input type="password" name={password} onChange={(event) => setPassword(event.target.value)} id="passwordord" placeholder='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default withGuest(LoginPage);
