import React, { Component ,useState,useEffect } from 'react';
import Container from '@material-ui/core/Container';
import './EditStudent.css';
import axios from "axios"
import Swal from "sweetalert2"

export default function EditStudent() {
    const [localid,setLocalid]=useState(localStorage.getItem("teacher_id"))
    const [students, setStudents] =useState([])
    useEffect(()=>{
        axios.get(`https://edu-up.herokuapp.com/operators/dashboard/teachers/${localid}/students`)
        .then(res=>{
            setStudents(res.data.teacher_students)
        }).catch(err=>{
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "حدث خطأ ما ",
              });        return false;
        })
    },[])
    const DeleteStudent=(id ,e)=>{
        axios.put(`https://edu-up.herokuapp.com/operators/dashboard/teachers/${localid}/students/${id}`)
        .then(res=>{
            if(res.data){
            const newstudents = students.filter(item => item.id !== id);
                setStudents(newstudents);
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "حدث خطأ ما ",
                  });        return false;            }
        })
    }
        return (
            <div>
                
                <Container className="welcome-add-cont-os">
                    <h2 style={{color:"white"}} >حذف او تعديل الطلاب  </h2>
                </Container>

\
                <Container className="student-grade-cont-os">



                        <Container className="label-os" style={{color:"white",background:"green",maxWidth:"30%", textAlign:"center", height:"30px", marginBottom:"20px", borderRadius:"10px" }}>
                            <h3 className="cont-h3"  >الطلاب</h3>
                        </Container>




                        <Container className="search-grade-cont-os" >
                                <Container className="custom-select" >
                                    <select className="select-os" >
                                        <option className="option" value="0">الصف</option>
                                        <option value="1">الاول</option>
                                        <option value="2">الثاني</option>
                                        <option value="3">الثالث</option>
                                    </select>
                                </Container>

                                <Container className="custom-select" >
                                    <select className="select-os" >
                                        <option className="option" value="0">المجموعات</option>
                                        <option value="1">الاول</option>
                                        <option value="2">الثاني</option>
                                        <option value="3">الثالث</option>
                                    </select>
                                </Container>
                                <Container className="custom-select" >
                                    <select className="select-os" >
                                        <option className="option" value="0">المدرس</option>
                                        <option value="1">الاول</option>
                                        <option value="2">الثاني</option>
                                        <option value="3">الثالث</option>
                                    </select>
                                </Container>

                                <input    className="input-os"  type="text"   name="studentname" placeholder="ابحث  عن الطالب" />
                                <button className="btn-os" >ابحث</button>
                          </Container>







                    <Container className="view-grade-cont-os" >
                        {students.map((student,index)=>{
                            return(
                                <div key={index}>
                                <div className="student-name-oss">
                            <p style={{textAlign:"right" }} className="p-oss" value={student.id}>{student.fname}{student.lname} </p>
                                </div>
                                
                                <div className="student-grades-os">
                                <p style={{textAlign:"center" }} className="p-oss"> : {}</p>
                                </div>
                                
                                <div>
    
                                        <button className="btn-os2"
                                        onClick={e=>{DeleteStudent(student.id,e)}}
                                        >حذف</button>
                                        <button className="btn-os2" >تعديل </button>
    
                                </div>
                            </div>
                            )
                        })}
                       


                        
                    </Container>

                    



                   


                </Container>


            </div>
        )
}
