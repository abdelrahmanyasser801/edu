import React ,{useState ,useEffect} from "react"
import {Grid  ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import "./Addquestion.css"
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
export default function Addquestion(){
  useEffect(()=>{
    axios.get("https://edu-up.herokuapp.com/operators/dashboard/exams/%3Cexam_id%3E/questions")
    .then(res=>{
      setYears(res.data.school_years)
      setSubjects(res.data.subject)
    }).catch(err=>{
      console.log(err)
    })
  },[])
    {/***************************APISSSS *********************/}
    const [years,setYears] = useState([])
    const [subjects,setSubjects] = useState([])
    {/****************************************************** */}
    const [currentyear,setCuryear] = useState('')
    const [currentsub,setCursub] = useState('')
    
    const [question,setQuestion] = useState('')
    const [grade,setGrade] = useState('')
    const [correct,setCorrect] = useState('')
    const [answerone,setAnswerone] = useState('')
    const [answertow,setAnswertwo] = useState('')
    const [answerthree,setAnswerthree] = useState('')
    const [teacherid,setTeacherid] = useState('')

    const data={
      question_head: question,
      grade: grade,
      correct_answer: correct,
      answer1: answerone,
      answer2: answertow,
      answer3: answerthree,
      subject_id : currentsub,
      school_year_id: currentyear,
      teacher_id: teacherid
    }
    
    const handleQuestion = (e) => {
      axios.post("https://edu-up.herokuapp.com/operators/dashboard/exams/%3Cexam_id%3E/questions",data)
      .then(res=>{
        if(res.data.question_created){
          window.alert("created")
        }else{
          window.alert(res.data.err)
        }
      }).catch(err=>{
        console.log(err)
      })
      };
      
    const handleFinalquestion = (e) => {
    e.preventDefault()
    axios.post("https://edu-up.herokuapp.com/operators/dashboard/exams/%3Cexam_id%3E/questions",data)
    .then(res=>{
      if(res.data.question_created){
        window.alert("created")
      }else{
        window.alert(res.data.err)
      }
    }).catch(err=>{
      console.log(err)
    })
    };
     
  


      const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        input: {
          display: 'none',
        },
        floatingLabelFocusStyle: {
            color: "green"
        },
        inputfi:{
            marginBottom:15
        },
        
      }));
      const classes = useStyles();

    return(
        <div className="addquestion-form">
            <form>
            <Grid container spacing={3} xs={12}
            direction="column"
            justify="center"
            alignItems="center"
            >
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل السؤال</InputLabel>
        <TextField  
         id="outlined-basic" 
          placeholder="ادخل السؤال"   
          required
          onChange={e=>setQuestion(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
        <InputLabel className="inp1">الدرجه</InputLabel>
        <TextField  
        type="number"
         min="0" max="100" 
         id="outlined-basic"  
         placeholder="الدرجه"  
          required
          onChange={e=>setGrade(e.target.value)}

          />    
        </Grid>
        
        <Grid item xs={12}>
          <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">الماده </InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          onChange={e=>setCursub(e.target.value)
          }
        >
          {/**
          {subjects.map(sub=>{
            return(
              <MenuItem value={sub.id}>{sub.name}</MenuItem>
            )
          })}
          */}
        </Select>
      </FormControl>
                </Grid>
                <Grid item xs={12}>
          <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">الصف </InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          onChange={e=>setCuryear(e.target.value)
          }
        >
          {/** 
          {years.map(year=>{
            return(
              <MenuItem value={year.id}>{year.name}</MenuItem>

            )
          })}
         */}
        </Select>
      </FormControl>
                </Grid>

                <Grid item xs={12}>
      {/*  <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button  className="ques-upload-button"  component="span">
          اضافه صورة
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      */ }
       </Grid>
         <Grid item xs={12}>
        <InputLabel className="inp1">الاجابه الصحيحة</InputLabel>
        <TextField  
         id="outlined-basic" 
         placeholder="ادخل السؤال"   
         required
         onChange={e=>setCorrect(e.target.value)}
         />
       </Grid>
       {/** 
       <Grid>
       <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button  className="ques-upload-button"  component="span">
          اضافه صورة
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      
        </Grid>
        */}    
        </Grid>
            
            <Grid container xs={12}
            direction="column"
            justify="center"
            alignItems="center"
            >
            <Grid item xs={12}>
        <InputLabel className="inp1"> الاجابات الخاطئه 1</InputLabel>
        <TextField className={classes.inputfi} 
         id="outlined-basic1" 
          placeholder="الاجابه رقم 1"  
           required
           onChange={e=>setAnswerone(e.target.value)}
           />
       </Grid>
            <Grid item xs={12}>
        <InputLabel className="inp1"> الاجابات الخاطئه 2</InputLabel>
        <TextField className={classes.inputfi} 
         id="outlined-basic2" 
          placeholder="الاجابه رقم 2"  
           required
           onChange={e=>setAnswertwo(e.target.value)}

           />
       </Grid>
            <Grid item xs={12}>
        <InputLabel className="inp1"> الاجابات الخاطئه 3</InputLabel>
        <TextField className={classes.inputfi}
         id="outlined-basic3" 
          placeholder="الاجابه رقم 3" 
            required
            onChange={e=>setAnswerthree(e.target.value)}

            />
       </Grid>
            </Grid>
            <div className="buttons-div"
            >
                    <Button type="submit" 
                    className="add-button" 
                    variant="contained"
                    onClick={handleQuestion}
                    >انشاء</Button>

                    <Button type="submit" 
                    className="add-button" 
                    variant="contained"
                    onClick={handleFinalquestion}

                    >انشاء و اضافه</Button>
                </div>
            </form>
        </div>
    )
}