import React from 'react';
import '../Editionform/Editionform.css';
import'../../Pages/Transaction/Transaction.css'

function Editionform() {
  return (
    <div className='editForm_container'>
      <form className='editionForm'>
        <h1 className='editionForm_title'>Edit user info</h1>
        <div className="edition_items">
          <label htmlFor="userName">User Name : </label>
          <input type="text" id='userName' />
        </div>
        <div className="edition_items">
          <label htmlFor="firstName">First Name : </label>
          <input type="text" id='firstName' />
        </div>
        <div className="edition_items">
          <label htmlFor="lastName">Last Name : </label>
          <input type="text" id='lastName' />
        </div>
        <div className="editionButton">
            <button className='editForm_button'>Save</button>
            <button className='editForm_button'>Cancel</button>
         
        </div>
      </form>
    </div>
  );
}

export default Editionform;
