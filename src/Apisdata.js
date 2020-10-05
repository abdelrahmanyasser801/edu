import React,{useState, useEffect} from 'react';
import axios from "axios";
import Adminview from "./Adminview/Adminview"


export const StudentsContext =React.createContext({});
export const TeachersContext =React.createContext({});


export default function Apisdata(props){
  const [students,setStudents] = useState([]);
  const [teachers,setTeachers] = useState([]);
useEffect (()=>{
function fetchData() {
  axios.get("https://edu-up.herokuapp.com/operators/dashboard/all_teachers")
  .then(function (res) {
    let slider = res.data.teachers.slider
    setTeachers(teachers.data.teachers.id)
    })
  }

  fetchData();
}, [])
 
    return(
        <TeachersContext.Provider value={teachers}>
            <Adminview/>
        </TeachersContext.Provider>
    )
}
