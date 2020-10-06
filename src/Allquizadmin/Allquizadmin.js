import React ,{ useState , useEffect} from "react"
import "./Allquizadmin.css"
import {Button ,Grid} from "@material-ui/core";
import axios from "axios"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  }from "react-router-dom";

export default function Allquizadmin(){
    const [exams , setExams] =useState([])
    useEffect(()=>{
        axios.get("https://edu-up.herokuapp.com/operators/dashboard/all_exams")
        .then(res=>{
            console.log(res.data)
            setExams(res.data.exams)
        })
    },[])
    return(
        <div className="all-quiz">
            <h2>جميع الامتحانات</h2>

            <Link to='/addquiz'>
                <Button variant="contained" className="all-quiz-btn"> انشاء امتحان</Button>
            </Link>
            {exams}
            <Grid
             container 
             direction="column"
             justify="center"
             alignItems="flex-end"
           >
               <Grid item container className="father-grid">
                <Grid item xs={2}>
                <Button variant="contained" className="quiz-btn">عرض</Button>
                </Grid>
                <Grid item xs={2}>
                <Button variant="contained" className="quiz-btn">حذف</Button>
                </Grid>
                <Grid item xs={2}>
                <Button variant="contained" className="quiz-btn">تعديل</Button>
                </Grid>
                <Link to="/addquestion">
                <Grid item xs={2}>
                <Button variant="contained" className="quiz-btn">اضافه</Button>
                </Grid>
                </Link>
                
                <Grid item xs={2}>
                <Link to='/active'>
                    <Button variant="contained" className="quiz-btn" style={{textDecoration:'none'}} 
                    onClick={localStorage.setItem("exam_id",1)}
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
                className="quiz-name">اسم الامتحان</p>
               </Grid>
               </Grid>
            </Grid>
            <div className="breaker"></div>

    

        </div>
    )
}