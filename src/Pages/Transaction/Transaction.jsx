import React, { useState,useEffect } from 'react'
import '../Transaction/Transaction.css'
import Account from '../../components/Account/Account'
import Editionform from '../../components/Editionform/Editionform'
import { useSelector } from 'react-redux'
import { selectFirstName,selectLastName } from '../../selector'
 import { controlStorage } from '../../components/Header/Header'



function Transaction() {
  useEffect(() => {
    controlStorage()
  })
  const[edit, setEdit]=useState(false)
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  // const token = controlStorage()
  return (
    <div className="transaction main bg-dark">
    <main className="main bg-dark">
      {!edit ?
      <div className="header">
        <h1>Welcome back<br />{firstName } {lastName}</h1>
        <button className="edit-button" onClick={ ()=>setEdit(!edit)}>Edit Name</button>
      </div>
      :<Editionform/>}
   
      <h2 className="sr-only">Accounts</h2>
      <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Available Balance"}/>
      <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"} description={"Available Balance"}/>
      <Account title={"Argent Bank Credit Card (x8349"} amount={"$184.30"} description={"Current Balance"}/>
      </main>
      </div>

  )
}

export default Transaction