import React from "react"
import "./Allquiz.css"
import {Button ,Grid} from "@material-ui/core"
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
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">عرض</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">حذف</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">تعديل</Button>
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

            
            <Grid
             container 
             direction="column"
             justify="center"
             alignItems="flex-end"
           >
               <Grid item container className="father-grid">
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">عرض</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">حذف</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">تعديل</Button>
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

            <Grid
             container 
             direction="column"
             justify="center"
             alignItems="flex-end"
           >
               <Grid item container className="father-grid">
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">عرض</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">حذف</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" className="quiz-btn">تعديل</Button>
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