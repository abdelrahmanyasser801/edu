import React, { Component, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import './ActivationStudents.css';
import axios from "axios"

export default function ActivationStudents() {
    const [activestudents, setActivestudents] = useState([

        {
            "exams_num": 0,
            "fname": "aa",
            "has_exam": false,
            "id": 8,
            "lname": "bb",
            "mobile": "8763456785",
            "teachers_num": 1,
            "username": "ab"
        },
        {
            "exams_num": 1,
            "fname": "xxx",
            "has_exam": true,
            "id": 7,
            "lname": "zzz",
            "mobile": "123459875",
            "teachers_num": 1,
            "username": "xz"
        }




    ])
    const [notactivestudents, setNotactivestudents] = useState([



        {
            "exams_num": 1,
            "fname": "bc",
            "has_exam": false,
            "id": 8,
            "lname": "fg",
            "mobile": "8763456785",
            "teachers_num": 2,
            "username": "hq"
        },
        {
            "exams_num": 1,
            "fname": "yy",
            "has_exam": true,
            "id": 7,
            "lname": "kl",
            "mobile": "123459875",
            "teachers_num": 4,
            "username": "ty"
        }
    ],



    )

    const [examid, setexamid] = useState(localStorage.getItem("exam_id"))
    {/** 
    useEffect(()=>{
        axios.get(https://edu-up.herokuapp.com/operators/dashboard/exams/${examid}/students)
        .then(res=>{
            setActivestudents(res.data.activated__students)
            setNotactivestudents(res.data.not_active_students)
        })
    },[])
    */}
    return (

        <div>

            <Container className="welcome-exam-cont-os">
                <h2 style={{ color: "white" }} >الامتحان  </h2>
            </Container>



            <Container className="student-grade-cont-os">



                <Container className="label-os" style={{ color: "white", background: "green", maxWidth: "30%", textAlign: "center", height: "40px", marginBottom: "20px", borderRadius: "10px", }}>
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

                    <input className="input-os" type="text" name="studentname" placeholder="ابحث  عن الطالب" />
                    <button className="btn-os" >ابحث</button>
                </Container>

                <Container className="view-grade-cont-os" >
                    {
                        activestudents.map((student, index) => {
                            return (
                                <div key={index}>
                                    <div className="student-name-os">
                                        <p style={{ textAlign: "right" }} className="p-oss"> {student.fname}{student.lname}</p>
                                    </div>

                                    <button className="btn-active-os" disabled>تفعيل</button>
                                    <button className="btn-active-os" >عدم تفعيل</button>
                                </div>

                            )
                        })
                    }
                    {

                        notactivestudents.map((student, index) => {
                            return (
                                <div key={index}>
                                    <div className="student-name-os">
                                        <p style={{ textAlign: "right" }} className="p-oss"> {student.fname}{student.lname}</p>
                                    </div>

                                    <button className="btn-active-os" >تفعيل</button>
                                    <button className="btn-active-os" disabled>عدم تفعيل</button>
                                </div>

                            )
                        })
                    }


                </Container>

            </Container>


        </div>
    )
}