import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import './Allstudents.css';
import axios from "axios"

export default function ActivationStudents() {
    const [students, setStudents] = useState([])
    const [teachers, setTeachers] = useState([])
    const [groups, setGroups] = useState([])
    const [years, setYear] = useState([])
    const [yearState, setYearState] = useState(false)
    const [teacherState, setTeacherState] = useState(false)
    const [filtered, setfiltered] = useState([])


    const [currentteacher, setCurrentteacher] = useState("")
    const [currentyear, setCurrentyear] = useState("")
    const [currentgroup, setCurrentgroup] = useState("")

    useEffect(() => {
        axios.get("https://edu-up.herokuapp.com/operators/dashboard/all_students")
            .then(res => {
                setStudents(res.data.students)
            }).catch(err => {
                console.log(err)
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
    return (

        <div>

            <Container className="welcome-exam-cont-os">
                <h2 style={{ color: "white" }} >الامتحان  </h2>
            </Container>

            {
                console.log("students : ", students)
            }

            <Container className="student-grade-cont-os">



                <Container className="label-os" style={{ color: "white", background: "green", maxWidth: "30%", textAlign: "center", height: "40px", marginBottom: "20px", borderRadius: "10px", }}>
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
                </Container>

                <Container className="view-grade-cont-os" >
                    {students.map((student, index) => {
                        return (
                            <div>
                                <div className="student-name-os">
                                    <p style={{ textAlign: "right" }} className="p-oss"> {student.fname}{student.lname}</p>
                                </div>


                            </div>

                        )
                    })}


                </Container>








            </Container>


        </div >
    )
}

