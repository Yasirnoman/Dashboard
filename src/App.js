
import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './MainDashborad';
import { useEffect } from 'react';


function App() {
 const [Data,setData]=useState(null)


  useEffect(() => {

    var res = JSON.parse(localStorage.getItem("isLoggedIn"))

    console.log(res)
   setData(res)
  }, [])

  return (
   <div>
 {Data ==null? (
      <Login/>
      ) : (
        <Dashboard/>
      )}
   
   </div>
  );
}

export default App;