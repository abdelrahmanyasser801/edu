import React ,{useState} from "react"
import {Grid  ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import "./Addquestion.css"
import { makeStyles } from '@material-ui/core/styles';

export default function Addquestion(){
    const [year,setYear] = useState()
    const handleChange = (event) => {
        setYear(event.target.value);
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
        <InputLabel className="inp1">ادخل السؤال</InputLabel>
        <TextField   id="outlined-basic"  placeholder="ادخل السؤال"   required/>
        </Grid>

        <Grid item xs={12}>
        <InputLabel className="inp1">الدرجه</InputLabel>
        <TextField  type="number" min="0" max="100" id="outlined-basic"  placeholder="الدرجه"   required/>    
        </Grid>
        
        <Grid item xs={12}>
          <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">السنه الدراسيه</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          value={year}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
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
      
       </Grid>
         <Grid item xs={12}>
        <InputLabel className="inp1">الاجابه الصحيحة</InputLabel>
        <TextField   id="outlined-basic"  placeholder="ادخل السؤال"   required/>
       </Grid>
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
            </Grid>
            <Grid container xs={12}
            direction="column"
            justify="center"
            alignItems="center"
            >
            <Grid item xs={12}>
        <InputLabel className="inp1">الاجابات الخاطئه</InputLabel>
        <TextField  id="outlined-basic"  placeholder="الاجابه رقم 1"   required/>
       </Grid>
            </Grid>
            <div className="buttons-div"
            >
                    <Button type="submit" className="add-button" variant="contained">انشاء</Button>

                    <Button type="submit" className="add-button" variant="contained">انشاء و اضافه</Button>
                </div>
            </form>
        </div>
    )
}