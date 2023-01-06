import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/ducks/auth/actions';
import * as TAG from "../../constant/tag";
import { useEffect } from 'react';
import {useNavigate } from 'react-router';
import withGuest from "../routes/hoc/withGuest";
import { Button, Input, Form } from 'antd';



function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form] = Form.useForm();

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
    console.log(TAG.AUTH,"LoginPage start login with email:",form.getFieldValue('username'),"password:",form.getFieldValue('password'))
    dispatch(login(email, password))
  }


  return (
    <div className="h-screen w-screen grid">
        <div className="h-screen min-h-screen w-full md:w-4/12  bg-slate-100">
            <div className="mt-24 mb-16 mx-24 text-white text-center py-5 inline-block">
                <img src="./assets/brisma_logo.png" className='inline-block' alt="" /></div>
            <div className="mx-10">
                <h3 className="text-slate-800 text-xl mb-4 font-semibold">Login</h3>
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
              form={form}
            >
            <Form.Item
              label="Personal Input Number"
              name="username"
              rules={[{ required: true, message: 'Please input your Personal Input Number!' }]}
            >
              <Input onChange={(val) => setEmail(val.target)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password onChange={(val) => setPassword(val.target)}  />
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit" onClick={doLogin} className='bg-blue-500'>
                Submit
              </Button>
            </Form.Item>
          </Form>
                  </div>
              </div>
              <div className="h-full bg-white hidden md:block"></div>

          </div>
        )
      }

export default withGuest(LoginPage);
