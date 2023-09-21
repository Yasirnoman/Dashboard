
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Login.css'
import './Register.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { Dialog } from 'primereact/dialog';
import axios from 'axios';
import { useEffect } from 'react';
import { Calendar } from 'primereact/calendar';





function Login() {
  
  const toast = React.useRef(null);
  const [Username, setUserName] = React.useState("")
  const [Email, setEmail] = React.useState("")
  const [Phonenumber, setPhonenumber] = React.useState("")
  const [Password, setPassword] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false)
  const [loading1, setLoading1] = React.useState(false);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [idForEdit] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(null);
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
  const [date, setDate] = React.useState(null)


  const clearFields = () => {
    setUserName("")
    setEmail("")
    setPassword("")
    setPhonenumber("")
    setDate("")
  }




  const SaveAdminData = async () => {
    if (Username != "" && Email != "" && Phonenumber != "" && Password != "" && date !="") {
      setLoading1(true);
      let obj = {
        name: Username,
        email: Email,
        password: Password,
        phonenumber: Phonenumber,
        date: date,
      }

      var response = null;

      if (isEditMode) {
        response = await axios.put(`http://localhost:5000/api/AdminData/` + idForEdit, obj);
      }
      else {
        response = await axios.post(`http://localhost:5000/api/AdminData/`, obj);
      }

      if (response.data.isSaved) {

        setOpen(false)
        setIsEditMode(false)
        clearFields()
      }
      else {

      }
      setLoading1(false);
    }
    else {
     
    }
  }



  useEffect(() => {

    var res = JSON.parse(localStorage.getItem("isLoggedIn"))
    console.log(res)
    if (res) {
      setLoggedIn(res)
    }
  }, [])



  const AdminLogin = async () => {
    setLoading1(true);

    if (Email != "" && Password != "") {
      let obj = {
        email: Email,
        password: Password,
      }
      console.log("Application is running")
      var response = await axios.post(`http://localhost:5000/api/AdminData/AdminLogin`, obj);
      if (response.data.isAuthenticated) {
        toast.current?.show({ severity: 'error', summary: 'Success Message', detail: 'Please enter correct email and password', life: 3000 });

        localStorage.setItem("isLoggedIn", JSON.stringify(response.data.data[0]))
        setLoggedIn(response.data.data[0])
        setOpenLoginDialog(false)
        window.location.reload()
      }
      else {
        toast.current?.show({ severity: 'error', summary: 'Success Message', detail: 'Please enter correct email and password', life: 3000 });

      }
      setLoading1(false);

    }
  }





  return (
    <>
      
        <div>
          <MDBContainer fluid>
            <MDBRow>

              <MDBCol sm='6 white'>

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: '185px' }} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                </div>



                <div className='d-flex center flex-column justify-content-center h-custom-2  pt-4'>

                  <p>Please login to your account</p>


                  <MDBInput wrapperClassName='mb-2 width' value={Email} onChange={(e) => setEmail(e.target.value)} label='Email address' id='form1' type='email' />
                  <MDBInput wrapperClassName='mb-2 width' value={Password} onChange={(e) => setPassword(e.target.value)} label='Password' id='form2' type='password' />


                  <div className="text-center width pt-1 mb-5 pb-1">
                    <MDBBtn onClick={AdminLogin} className="mb-4 w-100  width gradient-custom-2">Sign in</MDBBtn>
                    <a className="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                    <p className="mb-0">Don't have an account?</p>
                    <MDBBtn outline className='mx-2' onClick={() => setOpen(true)} color='danger'>
                      Sign Up
                    </MDBBtn>
                  </div>

                </div>



              </MDBCol>

              <MDBCol sm='6' className='d-none d-sm-block px-0'>
                <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                </div>
              </MDBCol>

            </MDBRow>

          </MDBContainer >

        </div>
  

      <div>
        <Dialog onHide={() => setOpen(false)} visible={open} >

          <div className="" id="pills-Register" role="tabpanel" aria-labelledby="pills-Register-tab">

            <input type="text" className="form-control " value={Username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" id="validationCustom01" required />
            <div className="valid-feedback">
              Looks good!
            </div>
            <br />

            <input type="text" autoComplete='false' className="form-control input-box" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide a valid Email.
            </div>
            <br />


            <input type="text" className="form-control phone-number input-box" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Your Phone Number" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">
              Please provide a valid Phone Number.
            </div>
            <br />

            <div className=" justify-content-center ">
                <Calendar className='p-component1 calendar' placeholder='Enter Date' value={Date} onChange={(e) => setDate(e.target.value)} dateFormat="dd/mm/yy" />
              </div>
              <br />


            <input type="Password" className="form-control margin" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide a valid Password.
            </div>


            <br />
            <br />

            <button type="button" loading={loading1} onClick={SaveAdminData} className="btn btn-custom btn-outline-success">
              <b> Submit </b>
            </button>
            <button type="button" onClick={() => setOpen(false)} className="btn btn-custom btn-outline-success">
              <b> Cancel </b>
            </button>
          </div>

        </Dialog>
      </div>
    </>
  );
}

export default Login;