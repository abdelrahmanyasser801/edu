import React,{useState , useEffect} from "react"
import "./Addstudent.css"
import {Grid,Input ,InputAdornment ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Swal from "sweetalert2"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from "axios"
export default function Addstudent(){
useEffect(()=>{
axios.get("https://edu-up.herokuapp.com/operators/dashboard/students")
.then(res=>{
  console.log(res)
  setGroups(res.data.groups)
})
.catch(err=>{
  console.log(err)
})
axios.get("https://edu-up.herokuapp.com/operators/dashboard/students")
.then(res=>{
  console.log(res)
  setYears(res.data.school_years)
})
.catch(err=>{
  console.log(err)
})

},[])
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

    {/************************APIS ARRAYS************************** */}
    const [groups, setGroups] = useState([]);
    const [years, setYears] = useState([]);
    {/************************************************************** */}
    const classes = useStyles();
    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
    const [teacherid,setTeacherid]=useState('')
    const [currentgroup,setCurrentgrp]=useState('')
    const [currentyear,setCurrentyear]=useState('')

    const data={  
      fname: fname,
      lname: lname,
      username: username,
      password: password,
      mobile: mobile,
      school_year_id: currentyear,
      group_id: currentyear,
      teacher_id: teacherid
    }
   
    const phonenumber = (e) =>
{
    e.preventDefault()
    axios.post("https://edu-up.herokuapp.com/operators/dashboard/students",data)
    .then(res=>{
      console.log(res.data)
      if(res.data){
        window.alert("succ")
        console.log("successs")
        window.location.href = "/";

        if(res.response){
          window.alert("succccedddddd")
        }
        else if(res.request){
          window.alert(res.request);

        }
        else {
          // Something happened in setting up the request that triggered an Error
          window.alert('Error', res.message);
        }
      }
    }).catch(err=>{
      console.log(err)
      if (err.response) {
        const status =err.response.status;
        const dta =err.response.data;
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        //window.alert(error.response.status);
        //window.alert(error.response.message);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: status+" "+dta,
        });        return false;
        

      } else if (err.request) {
        const rqst=err.request
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: rqst,
        });        return false;
      } else {
        const msg=err.message
        // Something happened in setting up the request that triggered an Error
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: msg,
        });        return false;
      }
    
    })
    
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
        <TextField className="out-input"
         id="outlined-basic15" 
          placeholder="ادخل الاسم الاول" 
          required
          onChange={e=>setFname(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل اسم العائلة</InputLabel>
        <TextField className="out-input"
         id="outlined-basic16"  
         placeholder="ادخل اسم العائلة"   
         required
         onChange={e=>setLname(e.target.value)}
         />
        </Grid>
        
        
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل اسم الطالب</InputLabel>
        <TextField className="out-input" 
        id="outlined-basic17" 
         placeholder="ادخل اسم الطالب" 
          required
          onChange={e=>setUsername(e.target.value)}

          />

        </Grid>
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل الرقم السري</InputLabel>
        <Input
        autoComplete="current-password"
         className="out-input"
         placeholder="ادخل الرقم السري" 
         type="password"
         id="standard-adornment-password"
        required
        onChange={e=>setPassword(e.target.value)}

        />
        </Grid>


        
          <Grid item xs={12}>
          <InputLabel className="inp1">ادخل رقم الهاتف</InputLabel>

          <TextField  type="tel" pattern="^\d{4}-\d{3}-\d{4}$" 
          required 
          className="out-input" 
          id="outlined-basic3"
           placeholder="ادخل رقم الهاتف" 
           onChange={e=>setMobile(e.target.value)}

           />
          </Grid>

          <Grid item xs={12}>
          <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">السنه الدراسيه</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          onChange={e=>setCurrentyear(e.target.value)}
        required>
         {years.map((year, index)=>{
           return(
           <MenuItem key={index} value={year.id}>{year.title}</MenuItem>
           )
         })}
         
          </Select>
          </FormControl>
          </Grid>
       
        <Grid item xs={12} >
        <InputLabel className="inp1">رقم المدرس</InputLabel>
        <TextField className="out-input"
         id="outlined-basic20"  
         type="number"
         placeholder="ادخل رقم المدرس"   
         required
         onChange={e=>setTeacherid(e.target.value)}

         />

        </Grid>
        <Grid item xs={12}>
        <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">المجموعة</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          onChange={e=>setCurrentgrp(e.target.value)}
          required>
            {groups.map((grp,index)=>{
              return(
                <MenuItem key={index} value={grp.id}>{grp.name}</MenuItem>
              )
            })}
      
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