import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcon } from './usecontext'


const Dashboard = () => {
  const{state,dispatch}=useContext(Authcon)
  
  const path=useNavigate()
  
  
  function tocreateform(){
    path('/course')
  }
  return (
    <div>
    <div>dashboard</div>
    <h1>Welcome {state?.user?.name}</h1>

    <button onClick={tocreateform}>Create</button>
    <button>Edit</button>
    <button>Delete</button>
    </div>
  )
}

export default Dashboard