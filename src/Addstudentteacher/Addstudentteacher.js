    import React, { Component,useEffect,useState } from 'react';
    import Container from '@material-ui/core/Container';
    import './Addstudentteacher.css';
    import axios from "axios"
    import Swal from "sweetalert2"
    import {Link} from "react-router-dom"
    export default function Addstudentteacher() {
        useEffect(()=>{
            axios.get(`https://edu-up.herokuapp.com/operators/dashboard/teachers/${localid}/not_students`)
            .then(res=>{
            console.log(res)
            setGroups(res.data.groups)
            setYears(res.data.school_years)
            setStudents(res.data.not_teacher_students)
            })
            
            .catch(err=>{
            console.log(err)
            })
            
    
                },[])
                const [Groups , setGroups] = useState([])
                const [years , setYears] = useState([])
                const [students , setStudents] = useState([])
                const [newstudents , setNewstudents] = useState([])
                const [currentyear , setCurrntyear] = useState("")
                const [currentgrp , setCurrentgrp] = useState("")
                const [localid ,setlocalid] = useState(localStorage.getItem('teacher_id'))
                const data={
                    group_id:currentgrp
                }
                
                const addstd=(id ,e)=>{
                    if(currentgrp===""){
                        Swal.fire({
                            icon: 'error',
                            title: 'تأكد من اختيار المجموعه اولا',
                            showConfirmButton: true,
                          }) 
                     }
                     else{

                        axios.put(`https://edu-up.herokuapp.com/operators/dashboard/teachers/${localid}/not_students/${id}`,data)
                        console.log("localid",localid)
                        console.log("id",id)
                        console.log("grpid",currentgrp)
                        const newdata = students.filter(item=>
                            item.id!==id
                        )
                        if(data){
                            Swal.fire({
                                icon: 'success',
                                title: 'تم الاضافه بنجاح',
                                showConfirmButton: true,
                              })                        }
                        else{
                            Swal.fire({
                                icon: 'error',
                                title: 'حدث خطأ',
                                showConfirmButton: true,
                              }) 
                             }
                             setStudents(newdata)

                             console.log(newdata)

                             
                    }

                }
                console.log("after function",students)

            return (
                
                <div>
                    <Container className="welcome-exam-cont-os">
                        <h2 style={{color:"white"}} >اضافه طالب لمدرس  </h2>
                    </Container>



                    <Container className="student-grade-cont-os">



                            <Container className="label-os" style={{color:"white",background:"green",maxWidth:"30%", textAlign:"center", height:"40px", marginBottom:"20px", borderRadius:"10px",}}>
                                <h3 className="cont-h3"  >الطلاب</h3>
                            </Container>




                            <Container className="search-grade-cont-os" >
                                    <Container className="custom-select" >
                                        <select className="select-os" 
                                        onChange={e=>setCurrentgrp(e.target.value)}
                                        >
                                            <option className="option" value="0">المجموعه</option>
                                            {Groups.map((grp,index)=>{
                                                return(
                                                <option key={index} value={grp.school_year_id}>{grp.title}</option>
                                                )
                                            })}
                                            
                                        </select>
                                    </Container>

                                    <Container className="custom-select" >
                                        <select className="select-os" 
                                        onChange={e=>setCurrntyear(e.target.value)}

                                        >
                                            <option className="option" value="0">الصف</option>
                                        {years.map((year,index)=>{
                                            return(
                                                <option key={index} value={year.id}
                                                >{year.name}</option>
                                            )
                                        })}
                                            
                                        
                                        </select>
                                    </Container>
                            

                                    <input  className="input-os" type="text"   name="studentname" placeholder="ابحث  عن الطالب" />
                                    <button className="btn-os" >ابحث</button>
                                    <br></br>
                                    <Link to="/adminview">
                                    <button className="finish-btn">الانتهاء</button>
                                    </Link>
                            </Container>

                        <Container className="view-grade-cont-os" >

                            <div>
                                
                            {students.map((student,index)=>{
                                        return(
                                <div key={index} className="student-name-os">
                                   
                                <div >
                                <p  className="p-oss" value={student.id}>{student.fname} {student.lname}</p>

                                </div>
                                <button className="btn-active-os" 
                                onClick={e=>addstd(student.id ,e)}
                                >اضافه </button>
                             </div>         
                             )   
                            })}

                         </div>
                    
                        </Container>
                    </Container>

                {console.log("after render",students)}
                            
                </div>
            )
    }
