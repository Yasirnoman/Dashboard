import { useState } from 'react'
import './App.css'
import Header from './Header'
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai"
import { LuVerified } from "react-icons/lu"
import { LiaDonateSolid } from "react-icons/lia"
import { IoMdLogOut } from "react-icons/io"
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Verifiedpersons from './Verifiedpersons'
import Donations from './DisDonations'
import pngegg from './pngegg.png'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';




function Dashboard() {
    
    const toast = React.useRef(null);
    const [loading2, setLoading2] = React.useState(false);
    const [openAdminLoginDialog,setOpenAdminLoginDialog]=React.useState(false);
    const [AdminEmail,setAdminEmail]=React.useState("")
    const [AdminPassword,setAdminPassword]=React.useState("")
    const[AdminLoggedIn,setAdminLoggedIn]=React.useState(null);


    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const Logout = () => {
        localStorage.clear()
        window.location.reload()
      }
    
  
    return (
        <>
        
    <Dialog onHide={() => setOpenAdminLoginDialog(false)} visible={openAdminLoginDialog} >
    <input type="text" className="form-control input-box" value={AdminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
    <div className="invalid-feedback">
      Please provide a valid Email.
    </div>
    <br />

    <input type="Password" className="form-control margin" value={AdminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="Enter Your Password" id="validationCustom03" required />
    <div className="invalid-feedback">
      Please provide a valid Password.
    </div> <br />
    <Button label="Login" className="p-button-success" loading={loading2}  />

  </Dialog>

<div className='container-fluid display'>
<Router>
  <div className=' col-2 sidebar rounded-3'>

    
                    <div className='sidebar-title'>
                        <div className='sidebar-brand'>
                        <img className="logo-image" src={pngegg} alt="logo" />
                           
                        </div>
                        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
                    </div>
                    <ul className='sidebar-list'>

                        <Link className='Home' to='/'>
                            <li className='sidebar-list-item'>
                                <AiOutlineHome className='icon' /> <span className='Home-text'> Home </span>   
                            </li>
                        </Link>

                       
                            <Link className='VerifiedPersons' to='/Verifiedpersons'> 
                            <li className='sidebar-list-item'>
                                <LuVerified className='icon' />   <span className='Verified-text'>Verified Persons </span>
                                </li>
                            </Link>

                        
                       
                            <Link className='DisDonations' to='/Donations'> 
                            <li className='sidebar-list-item'>
                                <LiaDonateSolid className='icon' />  <span className='Disburse-text'>Disburse Donations  </span> 
                                </li>
                            </Link>


                       
                       
                            <Link className='Logout' to='/Logout' onClick={Logout}>
                                 <li className='sidebar-list-item'>
                                <IoMdLogOut className='icon' /> <span className='Logout-text'> Logout   </span>
                               
                                </li>
                            </Link>
                    </ul>
              
             
          
        </div >

<div className='col-10'>

<Header />


    <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/Verifiedpersons' element={< Verifiedpersons />} />
                    <Route path='/Donations' element={< Donations />} />
                    {/* <Route path='/Logout' element={< Logout />} /> */}
                </Routes>
</div>
</Router>
</div>



 </>
       

    );
}

export default Dashboard;