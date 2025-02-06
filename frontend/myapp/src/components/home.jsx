import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const path= useNavigate()

    function toregister(){
        path('/register')
    }

    function tologin(){
        path('/login')
    }
    
  return (
    <div>
    <div style={{fontSize:"90px",color:"white"}}>Welcome User</div>
    <button onClick={toregister}>Register</button>
    <button onClick={tologin}>Login</button>
    </div>
  )
}

export default Home