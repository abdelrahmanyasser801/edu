import React,{useEffect,useState} from 'react';
import Studentview from "../Studentview/Studentview.js"
import Adminview from "../Adminview/Adminview.js"
import Addteacher from "../Addteacher/Addteacher.js"

export default function Dashboard() {
  const [role,setrole] = useState('')

  useEffect(()=>{
    if(localStorage.getItem('user')==="std"){
       setrole('std')
    }
    else if(localStorage.getItem('user')==="admin"){
      setrole('admin')
    }
    else if(localStorage.getItem('user')==="teacher"){
      setrole('teacher')
    }else{
      setrole('')
    }
  })
  return (
    <div>
      {role==="std" ? 
      <Studentview/> 
      :(role==="admin")?
      <Adminview/>
      :(role==="teacher")?
      <Addteacher/>:<><br></br><br></br><br></br><h1>ERROR 404 ! YOU HAVE NO ROLE</h1></>
    }
    
      </div>
  );
}

