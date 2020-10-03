import React from "react"
import "./Allquiz.css"
import {Button ,Grid} from "@material-ui/core";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  }from "react-router-dom";

export default function Allquiz(){
    
    return(
        <div className="all-quiz">
            <h2>جميع الامتحانات</h2>
            <Button variant="contained" className="all-quiz-btn"> انشاء امتحان</Button>
           

            
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
                <Grid item xs={2}>
                <Link to='/addquestion'>
                    <Button variant="contained" className="quiz-btn" style={{textDecoration:'none'}} >اضافة</Button>
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