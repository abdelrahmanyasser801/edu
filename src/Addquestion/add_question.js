import React ,{useState , Component} from "react"
import {Grid  ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import "./Addquestion.css"
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

    
export default class Addquestion extends Component{
    
  state={
          question_head:'',
          grade:'',
          correct_answer:'',
          answer1:'',
          answer2:'',
          answer3:'', 
          subject_id:'',
          school_year_id:'',
          teacher_id:''
      }

      handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value })

      }
      submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        
      }


      makeStyles = ( theme => ({
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

       
        



      render() {
         const { classes } = this.props;
        return (
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
                      value={this.state.subject_id}
                      onChange={this.handleChange}
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
            <TextField   id="outlined-basic"  placeholder="ادخل السؤال" name="question_head" value={this.state.question_head}  onChange={this.handleChange} required/>
            </Grid>

            <Grid item xs={12}>
            <InputLabel className="inp1">الدرجه</InputLabel>
            <TextField  type="number" min="0" max="100" id="outlined-basic" placeholder="الدرجه"   name="grade" value={this.state.grade}  onChange={this.handleChange}  required/>    
            </Grid>
      
            



                <Grid item xs={12}>
                  <input
                  accept="image/*"
                  className={classes}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button  className="ques-upload-button"  component="span">
                    اضافه صورة
                  </Button>
                </label> 
                <input accept="image/*" className={classes} id="icon-button-file" type="file" />
      
                </Grid>
              <Grid item xs={12}>
                  <InputLabel className="inp1">الاجابه الصحيحة</InputLabel>
                  <TextField type="text"  id="outlined-basic"  placeholder="اكتب الاجابة الصحيحة"  name="correct_answer" value={this.state.correct_answer} onChange={this.handleChange} required/>
              </Grid>


                  <Grid>
                    <input
                      accept="image/*"
                      className={classes}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button  className="ques-upload-button"  component="span">
                        اضافه صورة
                      </Button>
                    </label>
                    <input accept="image/*" className={classes} id="icon-button-file" type="file" />
                      </Grid>
                  </Grid>


                <Grid container xs={12}
                      direction="column"
                      justify="center"
                     alignItems="center"
                 >
                  <Grid item xs={12}>
                      <InputLabel className="inp1">اجابة خاطئة رقم 1 </InputLabel>
                      <TextField  id="outlined-basic"  placeholder="الاجابه رقم 1"  name="answer1" value={this.state.answer1} onChange={this.handleChange} required/>
                  </Grid>
               </Grid>


               <Grid container xs={12}
                      direction="column"
                      justify="center"
                     alignItems="center"
                 >
                  <Grid item xs={12}>
                      <InputLabel className="inp1"> اجابة خاطئة رقم 2</InputLabel>
                      <TextField  id="outlined-basic"  placeholder="الاجابه رقم 2"  name="answer2" value={this.state.answer2} onChange={this.handleChange} required/>
                  </Grid>
               </Grid>

               <Grid container xs={12}
                      direction="column"
                      justify="center"
                     alignItems="center"
                 >
                  <Grid item xs={12}>
                      <InputLabel className="inp1"> اجابة خاطئة رقم 3</InputLabel>
                      <TextField  id="outlined-basic"  placeholder="الاجابه رقم 3"  name="answer3" value={this.state.answer3} onChange={this.handleChange} required/>
                  </Grid>
               </Grid>



               







              












          <div className="buttons-div">
                  <Button type="submit" className="add-button" variant="contained" onClick={this.submitHandler} >انشاء</Button>

                  <Button type="submit" className="add-button" variant="contained">انشاء و اضافه</Button>
              </div>
          </form>
      </div>
        );
      }



   
}