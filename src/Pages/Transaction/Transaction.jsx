import React, { useState,useEffect } from 'react'
import '../Transaction/Transaction.css'
import Account from '../../components/Account/Account'
import Editionform from '../../components/Editionform/Editionform'
import { useSelector,useDispatch } from 'react-redux'
import { selectFirstName,selectLastName} from '../../selector'
import { controlStorage } from '../../components/Header/Header'
import { setFirstName, setLastName, setUserName } from '../../reducers/userSlice'



 

function Transaction() {
  const dispatch = useDispatch()
  async function getInfo() {
   
     const token = controlStorage()
     await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer" + token
      },
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(setFirstName(data.body.firstName))
          dispatch(setLastName(data.body.lastName))
          dispatch (setUserName(data.body.userName))
      
        })
      }
    })
  }
  
  useEffect(() => {
    getInfo()
  })
    
  const[edit, setEdit]=useState(false)
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
 
  function submit() {
 setEdit(!edit)
}
  
  return (
    <div className="transaction main bg-dark">
    <main className="main bg-dark">
      {!edit ?
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}</h1>
            <button className="edit-button" onClick={submit}>Edit Name</button>
      </div>
      :<Editionform/>}
   
      <h2 className="sr-only">Accounts</h2>
      <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Available Balance"}/>
      <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"} description={"Available Balance"}/>
      <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} description={"Current Balance"}/>
      </main>
      </div>

  )
}

export default Transaction