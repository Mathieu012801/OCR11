import React from 'react'
import'../Header/Header.css'
import Logo  from'../../assets/argentBankLogo.webp'
import { useSelector } from 'react-redux'
import { selectUserName } from '../../selector'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



 export function controlStorage() {
  const locToken = localStorage.getItem("token")
  const token=sessionStorage.getItem("token")
  if (locToken !== null) {
    return locToken
  } 
  else {
    return token
  }
 }

function reset(){
  localStorage.clear()
  sessionStorage.clear()
}

function Header() {
  const userName = useSelector(selectUserName)
  const token = controlStorage()
  const navigate = useNavigate()
  
  if (token === null) {
  return (
    <div>
        <nav className="main-nav">
      <Link className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to={"/SignIn"}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    </div>
  )
} else{
  return(
  <div>
  <nav className="main-nav">
<Link className="main-nav-logo" to={"/"}>
  <img
    className="main-nav-logo-image"
    src={Logo}
    alt="Argent Bank Logo"
  />
  <h1 className="sr-only">Argent Bank</h1>
</Link>
<div className="main-nav-item">
  <Link to={"/Transaction"}>
    <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
          <Link to={"/"} onClick={(e) => {
            e.preventDefault()
            reset()
            navigate("/")
          }}>
    <i className="fa fa-sign-out"></i>
    Sign Out 
  </Link>
</div>
</nav>
    </div>
  )
 }
}

export default Header