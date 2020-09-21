import React,{useState} from "react"
import "./Addstudent.css"
import {Grid,Input ,InputAdornment ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Swal from "sweetalert2"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
export default function Addstudent(){

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

    const [age, setAge] = React.useState('');
    const classes = useStyles();

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const phonenumber = (e) =>
{
    e.preventDefault()
    const inputtxt = document.getElementById("outlined-basic3");
    let phoneno = /^\d{11}$/;
  if(inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'برجاء ادخال رقم هاتف صحيح!',
              });        return false;
        }
};

const [values, setValues] = useState({
  password: '', 
  showPassword: false,
});

const handleChange2 = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

    return(
        <form onSubmit={phonenumber}>

        <div className="student-form">
            <h1 className="student-title">تسجيل طالب</h1>
            <div>
            <Grid container spacing={3} 
            direction="column"
            justify="center"
            alignItems="center"
            >
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل الاسم الاول</InputLabel>
        <TextField className="out-input" id="outlined-basic15"  placeholder="ادخل الاسم الاول" required/>
        </Grid>

        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل اسم العائلة</InputLabel>
        <TextField className="out-input" id="outlined-basic16"  placeholder="ادخل اسم العائلة"   required/>
        </Grid>
        
        
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل اسم الطالب</InputLabel>
        <TextField className="out-input" id="outlined-basic17"  placeholder="ادخل اسم الطالب"  required/>
        </Grid>
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل الرقم السري</InputLabel>
        <Input
        autoComplete="current-password"
        className="out-input"
         placeholder="ادخل الرقم السري"  required
        id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange2('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
        
        />
        </Grid>


        
          <Grid item xs={12}>
          <InputLabel className="inp1">ادخل رقم الهاتف</InputLabel>

          <TextField  type="tel" pattern="^\d{4}-\d{3}-\d{4}$" required className="out-input" id="outlined-basic3" placeholder="ادخل رقم الهاتف" />
          </Grid>

          <Grid item xs={12}>
          <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">السنه الدراسيه</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
        required>
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
        <Button variant="outlined" className="upload-button"  component="span">
          اختيار صورة
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        
      </label>
       </Grid>
        <Grid item xs={12} >
        <InputLabel className="inp1">ادخل اسم المدرس</InputLabel>
        <TextField className="out-input" id="outlined-basic20"  placeholder="ادخل اسم المدرس"   required />
        </Grid>
        <Grid item xs={12}>
        <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">المجموعة</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          required>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12}>
      <Button type="submit" variant="contained"  className="sub-button">تسجيل</Button>
      </Grid> 
      </Grid>
      
            </div>
        </div>
        </form>
    )
}