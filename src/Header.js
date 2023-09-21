import React from 'react'
import { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { Dropdown } from 'primereact/dropdown';
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import pngegg from './pngegg.png';
import { BiBell } from 'react-icons/bi'
import { FcSettings } from 'react-icons/fc';
import { FaSyncAlt } from 'react-icons/fa';



function Header() {
 
const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const Logout = () => {
    localStorage.clear()
    window.location.reload()
  }



  
  return (
    <>
    <header className='header rounded-3' >
      <div className='header-icons'>
      <i className="async-icon"><FaSyncAlt/></i>
      <i className="bell-icon"><BiBell/></i>
      <i className="setting-icon"><FcSettings/></i>
      </div>
   
    <div className="profile-dropdown">
    <img src={pngegg} alt="Profile" className="profile-image"/>
            <button className="profile-button" onClick={toggleDropdown}>
              User Profile <i className="dropdown-icon pi pi-angle-down"></i>
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <ul>
                <Link className='Home' to='/'>
                            <li className='sidebar-list-item'>
                                <AiOutlineHome className='icon' /> <span className='Home-text'> Home </span>   
                            </li>
                        </Link>
                
                  <Link className='Logout' to='/Logout' onClick={Logout}>
                                 <li className='sidebar-list-item'>
                                <IoMdLogOut className='icon' /> <span className='Logout-text'> Logout   </span>
                               
                                </li>
                            </Link>
                </ul>
              </div>
            )}
          </div>
      
    </header>
    </>
  )
}

export default Header;