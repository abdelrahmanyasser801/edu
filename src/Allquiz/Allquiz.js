import React, { useState, useEffect } from "react"
import "./Allquiz.css"
import { Button, Grid } from "@material-ui/core";
import axios from "axios"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function Allquiz() {
    const [teacherID, setTeacherID] = useState(localStorage.getItem("exam_teacher_id"))

    const [allExams, setAllExams] = useState([

    ])



    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }

        axios.get("https://edu-up.herokuapp.com/students/profile/teachers", config)
            .then(res => {
                const temp = res.data.active_exams.filter(exam => exam.teacher_id == teacherID)
                //const temp = allExams.filter(exam => exam.teacher_id == teacherID)
                setAllExams(temp)


            }).catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div className="all-quiz">
            <Grid >
                <h2> جميع الامتحانات</h2>


                {allExams.length === 0 ? <h1>لا يوجد امتحانات حاليا</h1> :

                    allExams.map(exam => {
                        return (
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="flex-end"
                                key={exam.id}
                            >
                                <Grid item container className="father-grid">



                                    <Grid item xs={2}>
                                        <Link to='/active'>
                                            <Button variant="contained" className="quiz-btn" style={{ textDecoration: 'none' }} >بدء</Button>
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
                            </Grid>

                        )
                    })}

                <div className="breaker"></div>

            </Grid>
        </div >
    )
}
