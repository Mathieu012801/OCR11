import React from 'react'
import '../Form/Form.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Form () {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("") 
  const [remember, setRemember]=useState(false)
  const navigate=useNavigate()
  async function login (userInfo){
 await fetch("http://localhost:3001/api/v1/user/login",{
     method :"POST",
     headers : {
       "Accept": "application/json", 
       "Content-Type" : "application/json"
     }, 
     body : userInfo
   }).then(response=>{
   if(response.ok){
    response.json().then(data=>{
      const token= data.body.token
      const validate = JSON.parse(userInfo)
      if(validate.remember===true){
        localStorage.setItem("token",token)
        navigate("/Transaction")

      }
      else if(validate.remember===false){
        sessionStorage.setItem("token", token)
        navigate("/Transaction")

      }
      console.log(validate.remember)
      console.log(sessionStorage.getItem("token"))
      return data
    })
   }

   })
 }
 
 const info = {
   email : email,
   password : password, 
   remember:remember 
 }
 const userInfo= JSON.stringify(info);

async function submit(e){
  e.preventDefault()
  console.log(userInfo)
  await login(userInfo);
 }
  
  return (
        <form >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={ (e) =>setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={()=> setRemember(!remember)} />
                <label htmlFor="remember-me" >Remember me</label>
          </div>
        <button type='button' className="sign-in-button" onClick={submit}>Sign In</button> 
        </form>

  )
}

export default Form