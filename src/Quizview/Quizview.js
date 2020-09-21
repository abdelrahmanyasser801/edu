import React,{useState} from "react"
import {Grid,MenuItem ,Typography,FormControl,InputLabel,SelectوRadio,FormControlLabel,Radio,FormLabel,RadioGroup } from '@material-ui/core';
import "./Quizview.css"
export default function Quizview(){
    const [value, setValue] = React.useState(1);

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    return(
        <div className="quiz-view">
            <Grid  container
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
            >
            <div className="title-bar">
            <Grid item
             container
             direction="row"
             justify="center"
             alignItems="flex-end"
            >
                <Grid item xs={6}>
                <p>اسم المدرس:</p>
                </Grid>
                <Grid item xs={6}>
                <p>عنوان الامتحان:</p>
                </Grid>
                <Grid item xs={6}>
                <p>اسم الماده:</p>
                </Grid>
                <Grid item xs={6}>
                <p>الوقت:</p>
                </Grid>
            </Grid>
            </div>
            <div className="quiz-body">
            <Grid conatainer item xs={12}
            direction="column"
            justify="center"
            alignItems="flex-end"
            >
                <h4>السؤال</h4>
                <div value={value} onChange={handleChange} className="radio-grp">
                <Grid item xs={12}
                direction="row"
                justify="flex-end"
                alignItems="center"
              
                >
                <input type="radio" id="male" name="answer" value="1"/>
                <label for="male">الاجابه 1</label>
                </Grid>
                <Grid item xs={12}
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                 <input type="radio" id="female" name="answer" value="2"/>
                <label for="female">الاجابه 2</label>
                </Grid>
                <Grid item xs={12}
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                 <input type="radio" id="other" name="answer" value="3"/>
                <label for="other">الاجابه 3</label><br></br>
                </Grid>
                <Grid item xs={12}
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                 <input type="radio" id="other" name="answer" value="3"/>
                <label for="other">الاجابه 3</label><br></br>
                </Grid>
                
                </div>
                <div className="divider"></div>
            </Grid>
            
            </div>

            </Grid>
        </div>
    )
}