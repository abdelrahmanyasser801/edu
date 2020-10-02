
import React ,{useState} from "react"
import {Grid  ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import "./addQuiz.css"
import { makeStyles } from '@material-ui/core/styles';


    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
export default function AddQuiz(){

  const [year,setYear] = useState('')
  const [end,setEnd] = useState('')
  const [start,setStart] = useState('')



    const [dataQuestion,setDataQuestion] = useState({
      question_head:'',
      grade:'',
      correct_answer:'',
      answer1:'',
      answer2:'',
      answer3:'', 
    });

    const [subject_id,setSubject]=useState('');
  


        const handleChangeData = (e) => {
          setDataQuestion({
             ...dataQuestion
             ,[e.target.name]: e.target.value });
        };
        const handleChangeSubject = (e) => {
          setSubject(e.target.value) 
             ;
        };
        const handleChangeYear = (e) => {
          setYear(e.target.value) 
             ;
        };
        const handleChangeEndTime = (e) => {
            setEnd(e.target.value);
            console.log(e.target.value)

          };
          const handleChangeStartTime = (e) => {
            setStart(e.target.value);
            console.log(e.target.value)
               ;
          };
        
        

        const handleSubmit =(e)=>{
          e.preventDefault();
          console.log(dataQuestion , subject_id)

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
        }
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
                <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">المادة</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={subject_id}
                        onChange={handleChangeSubject}
                        label="المادة"
                      >
                          <MenuItem value={'bio'}>أحياء</MenuItem>
                          <MenuItem value={'chem'}>كيمياء</MenuItem>
                          <MenuItem value={'phy'}>فيزياء</MenuItem>
                      </Select>
                   </FormControl>
                </Grid>

                <Grid item xs={12}>
                <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">السنة الدراسية</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={subject_id}
                        onChange={handleChangeYear}
                        label="السنة الدراسية"
                      >
                          <MenuItem value={'bio'}>الاةل</MenuItem>
                          <MenuItem value={'chem'}>الثاني</MenuItem>
                          <MenuItem value={'phy'}>الثالث</MenuItem>
                      </Select>
                   </FormControl>
                </Grid>





              <Grid item xs={12}>
              <InputLabel className="inp1"> عنوان الامتحان</InputLabel>
              <TextField   id="outlined-basic"  placeholder="العنوان " name="question_head" value={dataQuestion.question_head}  onChange={handleChangeData} required/>
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label"> المدرس</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={subject_id}
                        onChange={handleChangeYear}
                        label=" المدرس"
                      >
                          <MenuItem value={''}>حسن</MenuItem>
                          <MenuItem value={''}>حسين</MenuItem>
                          <MenuItem value={''}>حسانين</MenuItem>
                      </Select>
                   </FormControl>
                </Grid>

                <Grid item xs={12}>
                <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label"> المجموعة</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={subject_id}
                        onChange={handleChangeYear}
                        label="المجموعة"
                      >
                          <MenuItem value={''}>1</MenuItem>
                          <MenuItem value={''}>2</MenuItem>
                          <MenuItem value={''}>3</MenuItem>
                      </Select>
                   </FormControl>
                </Grid>



                <Grid item xs={12}>

                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label=" وقت البدأ"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={handleChangeStartTime}
                            value={start}
                        />
                    </form>

                </Grid>

                <Grid item xs={12}>

                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label="وقت الانتهاء "
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={handleChangeEndTime}
                            value={end}
                        />
                    </form>

                </Grid>

   


                  
                 </Grid>
                 





            <div className="buttons-div" 
                style={{display:'flex'}}
            >
                    <Button type="submit" className="add-button" variant="contained" onClick={handleSubmit} >اضافة</Button>

                </div>
            </form>
        </div>
    )
}