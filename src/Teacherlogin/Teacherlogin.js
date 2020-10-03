import React ,{useState} from "react"
import { FormControl,InputLabel,Input,InputAdornment, Button ,TextField,FormLabel} from '@material-ui/core';
import turtle from "../turtle.jpg"
import "./Teacherlogin.css";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from "axios"
import Swal from "sweetalert2"

const useStyles = makeStyles((theme) => ({

  
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgb(64,133,78)",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "rgb(64,133,78)",
    "&:hover": {
      backgroundColor: "rgb(158, 79, 144) !important"
    }
  },
 
}));

export default function SignIn() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  function UselocalStorage (localitem){
    const [loc,setState] = useState(localStorage.getItem(localitem))
    function setLocal(newitem){
        localStorage.setItem(localitem , newitem);
        setState(newitem);

    }
   return [loc ,setLocal];
}   
const [fruit,setFruit] = UselocalStorage("user")
  const [values, setValues] = useState({
    password: '', 
    showPassword: false,
  });
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlelogin =(e)=>{
    e.preventDefault()
    const data={
      email:email,
      password:password
    }
    axios.post("https://edu-up.herokuapp.com/teachers/login", data)
      .then(res =>{
        console.log(res)
        if(res.access_token){
          setFruit("teacher")
          localStorage.setItem("token",res.access_token)
          Swal.fire({
            icon: 'success',
            title: 'تم الدخول بنجاح',
            showConfirmButton: true,
          })
          window.location.href = "/dashboard";
        }else{
         window.alert(res.error)

        }
      })
      .catch(err =>{
        console.log(err)
        if (err.response) {
          const status =err.response.status;
          const message ="تاكد من كلمه المرور و الايميل"
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          //window.alert(error.response.status);
          //window.alert(error.response.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: status+" "+message,
          });        return false;
          

        } else if (err.request) {
          const req=err.request;
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: req,
          });        return false;
        } else {
          const msg =err.message
          // Something happened in setting up the request that triggered an Error
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg,
          });        return false;        }
      

      })
      
      

   
    }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          تسجبل الدخول
        </Typography>
        <form className={classes.form} Validate>
        <FormLabel className="label"
        >
        اسم المستخدم

        </FormLabel>
        <Input
        onChange={e=>setEmail(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            className="inp"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />

            <FormLabel className="label"
        >
        الرقم السري
        </FormLabel>
          <Input
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            autoComplete="current-password"
            className="inp"
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={e=>setPassword(e.target.value)}
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
             
           
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handlelogin}

          >
            دخول
          </Button>
          
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

