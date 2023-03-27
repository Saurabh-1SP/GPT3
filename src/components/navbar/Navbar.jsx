import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'


const Menu = () =>{
  return(
    <>
    <p><a href="#home">Home</a></p>
          <p><a href="#wgpt">What is GPT</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt__navbar' >
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button className='sign-button'>Sign Up</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className="gpt__navbar-menu_container scale-up-tr">
            <div className="gpt__navbar-menu_container_links">
              <Menu />
            </div>
            <div className="gpt__navbar-menu_sign">
        <p>Sign in</p>
        <button className='sign-button'>Sign Up</button>
      </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar