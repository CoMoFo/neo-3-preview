import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

import neoLogo from '../../images/neo-logo.svg'
import cozLogo from '../../images/coz-logo.svg'

import './Navigation.css'

const activeStyle = {
  fontWeight: 'bold',
}

export const PreviewLogo = () => (
  <div className="logo-sub-text" to="/">
    <h3> NEO3 Preview Explorer</h3>
    <p>
      Brought to you by: <img alt="coz-logo" src={cozLogo}></img>
    </p>
  </div>
)

export const Navigation = () => (
  <React.Fragment>
    <nav id="desktop_navigation">
      <div id="desktop_logo">
        {/* <Link to="/"> */}
        <img src={neoLogo} alt="logo" />
        <div id="logo-spacer" />
        <Link className="logo-sub-text" to="/">
          <PreviewLogo />
        </Link>
        {/* </Link> */}
      </div>
      <div id="desktop_navigation_options">
        <NavLink activeStyle={activeStyle} to="/transactions">
          Transactions
        </NavLink>

        <NavLink activeStyle={activeStyle} to="/blocks">
          Blocks
        </NavLink>

        <NavLink activeStyle={activeStyle} to="/contracts">
          Contracts
        </NavLink>
      </div>
    </nav>

    <nav id="mobile_navigation">
      <Menu top>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a> */}
      </Menu>
    </nav>
  </React.Fragment>
)
