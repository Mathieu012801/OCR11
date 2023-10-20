import React, { useState } from 'react';
import '../Editionform/Editionform.css';
import'../../Pages/Transaction/Transaction.css'
import { useSelector } from 'react-redux'
import { selectFirstName,selectLastName } from '../../selector'
import { controlStorage } from '../Header/Header';




function Editionform() {
  const [newUserName,setNewUserName] = useState("")
  const addUserName = {
    userName : newUserName
  }
  const test=JSON.stringify(addUserName)
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)

  
  async function majUserName(addUserName) {
    const token = controlStorage()
    await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer" + token
      },
      body: addUserName 
    })

    
    }  

  
  return (
    <div className='editForm_container'>
      <form className='editionForm'>
        <h1 className='editionForm_title'>Edit user info</h1>
        <div className="edition_items">
          <label htmlFor="userName">User Name : </label>
          <input type="text" id='userName' onChange={(e) => setNewUserName(e.target.value)} required />
        </div>
        <div className="edition_items">
          <label htmlFor="firstName">First Name : </label>
          <input type="text" id='firstName' placeholder={firstName} disabled  />
        </div>
        <div className="edition_items">
          <label htmlFor="lastName">Last Name : </label>
          <input type="text" id='lastName' placeholder= {lastName} disabled/>
        </div>
        <div className="editionButton">
          <button type='submit' className='editForm_button' onClick={e => majUserName(test)}>Save</button>
          <button className='editForm_button'>Cancel</button>
         
        </div>
      </form>
    </div>
  );
}

export default Editionform;
