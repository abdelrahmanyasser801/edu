import React, { Component, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import './EditStudent.css';
import axios from "axios"
import Swal from "sweetalert2"
import {Link} from "react-router-dom"
export default function EditStudent() {
    const [localid, setLocalid] = useState(localStorage.getItem("teacher_id"))
    const [students, setStudents] = useState([])

    const [yearState, setYearState] = useState(false)
    const [teacherState, setTeacherState] = useState(false)
    const [filtered, setfiltered] = useState([])
    const [teachers, setTeachers] = useState([])
    const [groups, setGroups] = useState([])
    const [years, setYear] = useState([])

    const [currentteacher, setCurrentteacher] = useState("")
    const [currentyear, setCurrentyear] = useState("")
    const [currentgroup, setCurrentgroup] = useState("")

    useEffect(() => {
        axios.get(`https://edu-up.herokuapp.com/operators/dashboard/teachers/${localid}/students`)
            .then(res => {
                setStudents(res.data.teacher_students)
            }).catch(err => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "حدث خطأ ما ",
                }); return false;
            })
        axios.get("https://edu-up.herokuapp.com/operators/dashboard/all_teachers")
            .then(res => {
                setTeachers(res.data.teachers)
            }).catch(err => {
                console.log(err)
            })
        axios.get("https://edu-up.herokuapp.com/operators/dashboard/teachers/teacher_id/groups")
            .then(res => {
                setYear(res.data.school_years)
            }).catch(err => {
                console.log(err)
            })
        axios.get("https://edu-up.herokuapp.com/operators/dashboard/students")
            .then(res => {
                console.log(res)
                setGroups(res.data.groups)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const Editstudent=(id ,e)=>{
        localStorage.setItem("student_id",id)
        window.location.href = "/editstudentdata";
    }

    const DeleteStudent = (id, e) => {
        axios.put(`https://edu-up.herokuapp.com/operators/dashboard/teachers/${localid}/students/${id}`)
            .then(res => {
                if (res.data) {
                    const newstudents = students.filter(item => item.id !== id);
                    setStudents(newstudents);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "حدث خطأ ما ",
                    }); return false;
                }
            })
    }
    return (
        <div>

            <Container className="welcome-add-cont-os">
                <h2 style={{ color: "white" }} >حذف او تعديل الطلاب  </h2>
            </Container>


            <Container className="student-grade-cont-os">
                <Container className="label-os" style={{ color: "white", background: "green", maxWidth: "30%", textAlign: "center", height: "30px", marginBottom: "20px", borderRadius: "10px" }}>
                    <h3 className="cont-h3"  >الطلاب</h3>
                </Container>
                <Container className="search-grade-cont-os" >
                    <Container className="custom-select" >
                        <select className="select-os"
                            onChange={e => {
                                setCurrentyear(e.target.value)
                                const groupstemp = groups.filter(group => group.school_year_id == e.target.value)
                                setGroups(groupstemp)
                                setYearState(true)

                            }}
                            disabled={yearState}
                        >
                            <option className="option" value="0">الصف</option>
                            {years.map((year, index) => {
                                return (
                                    <option value={year.id}>{year.name}</option>
                                )
                            })}
                        </select>
                    </Container>

                    <Container className="custom-select" >
                        <select className="select-os"
                            onChange={e => {
                                setCurrentteacher(e.target.value)
                                const groupstemp = groups.filter(group => group.teacher_id == e.target.value)
                                setGroups(groupstemp)
                                setTeacherState(true)

                            }}
                            disabled={teacherState}

                        >
                            <option className="option" value="0">المدرس</option>
                            {teachers.map((teacher, index) => {
                                return (
                                    <option value={teacher.id}>{teacher.username}</option>
                                )
                            })}
                        </select>
                    </Container>

                    <Container className="custom-select" >
                        <select className="select-os"
                            onChange={e => { setCurrentgroup(e.target.value) }}

                        >
                            <option className="option" value="0">المجموعات</option>
                            {groups.map((grp, index) => {
                                return (
                                    <option value={grp.id}>{grp.title}</option>
                                )
                            })}
                        </select>
                    </Container>


                    <input className="input-os" type="text" name="studentname" placeholder="ابحث  عن الطالب" />
                    <button className="btn-os" >ابحث</button>
                    <Link to="/adminview">
                    <button className="btn-os" >انتهاء و رجوع</button>
                    </Link>
                </Container>
                <Container className="view-grade-cont-os" >
                    {students.map((student, index) => {
                        return (
                            <div key={index}>
                                <div className="student-name-oss">
                                    <p style={{ textAlign: "right" }} className="p-oss" value={student.id}>{student.fname}{student.lname} </p>
                                </div>

                                <div className="student-grades-os">
                                    <p style={{ textAlign: "center" }} className="p-oss"> : {}</p>
                                </div>

                                <div>

                                    <button className="btn-os2"
                                        onClick={e => { DeleteStudent(student.id, e) }}
                                    >حذف</button>
                                    <Link to="/editstudentdata">
                                    <button className="btn-os2"
                                    onClick={e=>{Editstudent(student.id ,e)}}
                                    >تعديل </button>
                                    </Link>

                                </div>
                            </div>
                        )
                    })}
                </Container>
            </Container>
        </div>
    )
}
