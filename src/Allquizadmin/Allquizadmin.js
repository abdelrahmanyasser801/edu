import React, { useState, useEffect } from "react"
import "./Allquizadmin.css"
import { Button, Grid } from "@material-ui/core";
import axios from "axios"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function Allquizadmin() {
    const [exams, setExams] = useState(
        [
            {
                "id": 1,
                "title": "شهر 9"
            },
            {
                "id": 2,
                "title": "شهر 10"
            },
            {
                "id": 3,
                "title": "شهر 5 "
            },
            {
                "id": 9,
                "title": "شهر 12"
            }
        ]

    )
    useEffect(() => {
        axios.get("https://edu-up.herokuapp.com/operators/dashboard/all_exams")
            .then(res => {
                console.log(res.data)
                // setExams(res.data.exams)
            })
    }, [])
    const handelRemove = (id) => {
        axios.delete(`https://edu-up.herokuapp.com/operators/dashboard/exams/${id}`)
        setExams(exams.filter(exam => exam.id !== id))
        console.log("na hna ba click now !!!")
    }
    return (
        <div className="all-quiz">
            <h2>جميع الامتحانات</h2>

            <Link to='/addquiz'>
                <Button variant="contained" className="all-quiz-btn"> انشاء امتحان</Button>
            </Link>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
            >
                {exams.map(exam => {
                    return (
                        <Grid item container className="father-grid" key={exam.id}>
                            <Grid item xs={2}>
                                <Button variant="contained" className="quiz-btn"
                                    onClick={() => { localStorage.setItem("exam_id", exam.id) }}>عرض</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" className="quiz-btn"
                                    onClick={() => { handelRemove(exam.id) }}>حذف</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" className="quiz-btn"
                                    onClick={() => { localStorage.setItem("exam_id", exam.id) }}>تعديل</Button>
                            </Grid>
                            <Link to="/addquestion">
                                <Grid item xs={2}>
                                    <Button variant="contained" className="quiz-btn"
                                        onClick={() => { localStorage.setItem("exam_id", exam.id) }}>اضافه</Button>
                                </Grid>
                            </Link>

                            <Grid item xs={2}>
                                <Link to='/active'>
                                    <Button variant="contained" className="quiz-btn" style={{ textDecoration: 'none' }}
                                        onClick={() => { localStorage.setItem("exam_id", exam.id) }}
                                    >تفعيل طالب</Button>
                                </Link>
                            </Grid>

                            <Grid item xs={3}
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="flex-start"
                            >
                                <p
                                    item
                                    className="quiz-name">{exam.title}</p>
                            </Grid>
                        </Grid>
                    )
                })}


            </Grid>
            <div className="breaker"></div>
        </div >
    )
}