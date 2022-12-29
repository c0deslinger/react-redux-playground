import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/ducks/auth/actions';
import { compose } from "redux";
import withAuth from "../routes/hoc/withAuth";

function DashboardPage() {

  let dispatch = useDispatch();

  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: '#ff0000'}}>
      <h1>Dashboard</h1>
      <button onClick={() => {
        dispatch(logOut())
      }}>Logout</button>
    </div>
  )
}

export default compose(
  withAuth,
)(DashboardPage)

