import React from 'react'
import {useEffect } from 'react';

 function Logout() {




 useEffect(() => {
   localStorage.clear()
    window.location.reload()
 }, []);



  return(
    <>
    </>
  )
   
   
  }
 

export default Logout;
