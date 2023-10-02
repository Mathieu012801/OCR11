import React from 'react'
import'../Header/Header.css'
import Logo  from'../../assets/argentBankLogo.png'

function Header() {
  return (
    <div>
        <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="/SignIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    </div>
  )
}

export default Header