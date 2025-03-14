import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../axios/axios';
import '../'


const Paramsedit = () => {
    const[state,updatestate]=useState({})
    const path=useNavigate()
    

    const{id}=useParams();
    useEffect(()=>{
        if(id){
        
    

        singlecoursedata()
    }

    },[id])

    async function remove(){
      try{
        const response= await api.delete("/course/delete",{data:{id}})
        if(response.data.success){
          alert(response.data.message)
          path("/dashboard")

        

      }
    }
      catch(error){
        console.log(error)
      }


    }
    

    async function singlecoursedata(){

        try{
            const response=await api.post(`/course/singlecourse/${id}`)
            if(response.data.success){
                console.log(response.data.coursedata)
                console.log(id)
                updatestate(response.data.coursedata)
            }
            
        }
        catch(error){
            console.log(error)
        }
        }

        function toedit(){
          path(`/editcourse/${id}`)
        }

        function dash(){
          path('/dashboard')
        }

      
    
  return (
  <div>
    <button onClick={dash}> Dashboard</button>
    
    <h1 style={{color:"white"}}>{state.name} course</h1>
    
    <div class="container">
      
      <h1 class="course-info">Name :{state.name}</h1>
      <h1 class="course-info">Content :{state.content}</h1>
      <h1 class="course-info"> Instructor: {state.instructor}</h1>

    </div>
    <button onClick={remove}>Delete</button>
    <button onClick={toedit}>Edit</button>

    
    </div>
  )
}

export default Paramsedit