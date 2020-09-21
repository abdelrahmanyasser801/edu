import React ,{useState} from "react"
import { FormControl,InputLabel,Input,InputAdornment, Button ,TextField,FormLabel} from '@material-ui/core';
import turtle from "../turtle.jpg"
import "./Adminlogin.css";
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
    setFruit("admin")
    window.location.href = "/dashboard";
    
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
            onChange={handleChange('password')}
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

