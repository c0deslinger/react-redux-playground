import React from 'react'
import {useNavigate} from 'react-router-dom'

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: '#ff0000', textAlign: 'center'}}>
      <h1>Landing Page</h1>
      <button onClick={() => {
        navigate('/login')
      }}>Login</button>
    </div>
  )
}

export default LandingPage
