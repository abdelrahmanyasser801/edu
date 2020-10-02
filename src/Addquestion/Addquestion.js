import React ,{useState} from "react"
import {Grid  ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import "./Addquestion.css"
import { makeStyles } from '@material-ui/core/styles';

export default function  Addquestion(){
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
              <InputLabel className="inp1">ادخل السؤال</InputLabel>
              <TextField   id="outlined-basic"  placeholder="ادخل السؤال" name="question_head" value={dataQuestion.question_head}  onChange={handleChangeData} required/>
              </Grid>

              <Grid item xs={12}>
              <InputLabel className="inp1">الدرجة</InputLabel>
              <TextField  type="number" min="0" max="100" id="outlined-basic" placeholder="الدرجة"name="grade" value={dataQuestion.grade}  onChange={handleChangeData}  required/>    
              </Grid>
        
            


                  <Grid item xs={12}>
        
                  </Grid>


                <Grid item xs={12}>
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


                    <InputLabel className="inp1">الاجابه الصحيحة</InputLabel>
                    <TextField  name="correct_answer" onChange={handleChangeData}  id="outlined-basic"  placeholder=" "    value={dataQuestion.correct_answer}  required/>
                </Grid>


                    </Grid>




                    <Grid>
                        </Grid>
                  <Grid container xs={12}
                        direction="column"
                        justify="center"
                       alignItems="center"
                   >
                    <Grid item xs={12}>
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
                        <InputLabel className="inp1"> الاجابة الخاطئة رقم 1</InputLabel>
                        <TextField  id="outlined-basic"  placeholder="الاجابه رقم 1"  name="answer1" value={dataQuestion.answer1} onChange={handleChangeData}  required/>
                    </Grid>
                 </Grid>
                 <Grid>
                        </Grid>
                  <Grid container xs={12}
                        direction="column"
                        justify="center"
                       alignItems="center"
                   >
                    <Grid item xs={12}>
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
                        <InputLabel className="inp1">  الاجابة الخاطئة رقم 2</InputLabel>
                        <TextField  id="outlined-basic"  placeholder="الاجابه رقم 2"  name="answer2" value={dataQuestion.answer2} onChange={handleChangeData}  required/>
                    </Grid>
                 </Grid>
                 <Grid>
                        </Grid>
                  <Grid container xs={12}
                        direction="column"
                        justify="center"
                       alignItems="center"
                   >
                    <Grid item xs={12}>
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
                        <InputLabel className="inp1">الاجابة الخاطئة رقم 3 </InputLabel>
                        <TextField  id="outlined-basic"  placeholder="الاجابه رقم 3"  name="answer3" value={dataQuestion.answer3} onChange={handleChangeData}  required/>
                    </Grid>
                 </Grid>
                 





            <div className="buttons-div" 
                style={{display:'flex'}}
            >
                    <Button type="submit" className="add-button" variant="contained" onClick={handleSubmit} >انشاء</Button>

                    <Button type="submit" className="add-button" variant="contained">انشاء و اضافه</Button>
                </div>
            </form>
        </div>
    )
}