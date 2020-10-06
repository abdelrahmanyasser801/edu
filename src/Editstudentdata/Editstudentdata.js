import React,{useState , useEffect} from "react"
import "./Editstudentdata.css"
import {Grid,Input,Select ,FormControl,MenuItem ,InputLabel,Button ,TextField } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Swal from "sweetalert2"

import axios from "axios"
export default function Addstudent(){
useEffect(()=>{
axios.get("https://edu-up.herokuapp.com/operators/dashboard/students")
.then(res=>{
  console.log(res)
  setGroups(res.data.groups)
  setYears(res.data.school_years)
  setTeachers(res.data.teachers)

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
    const [teachers , setTeachers] =useState([])

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
    const [localid , setLocalid] = useState(localStorage.getItem("student_id"))
    const data={  
      fname: fname,
      lname: lname,
      username: username,
      password: password,
      mobile: mobile,
      school_year_id: currentyear,
      group_id: currentgroup,
      teacher_id: teacherid
    }
   
    const handlesubmit = (e) =>
{
    e.preventDefault()
    axios.put(`https://edu-up.herokuapp.com/operators/dashboard/students/${localid}`,data)
    .then(res=>{
        if(res.data){
        Swal.fire({
        icon: 'success',
        text: "تم التعديل",
      })
    window.location.href="/edit"
    }else{
        Swal.fire({
            icon: 'error',
            text: "حدث خطأ",
          })
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
    {/**
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
         */}
};




    return(
        <form onSubmit={handlesubmit}>

        <div className="student-form">
            <h1 className="student-title">تعديل طالب</h1>
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
          required
          onChange={e=>setFname(e.target.value)}
          placeholder={localStorage.getItem("fname")}
         />
        </Grid>

        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل اسم العائلة</InputLabel>
        <TextField className="out-input"
         id="outlined-basic16"  
         required
         onChange={e=>setLname(e.target.value)}
         placeholder={localStorage.getItem("lname")}

         />
        </Grid>
        
        
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل اسم الطالب</InputLabel>
        <TextField className="out-input" 
        id="outlined-basic17" 
          required
          onChange={e=>setUsername(e.target.value)}
          placeholder={`${localStorage.getItem("fname")}+${localStorage.getItem("lname")}`}
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
           
           onChange={e=>setMobile(e.target.value)}
           placeholder={localStorage.getItem("mobile")}

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
           <MenuItem key={index} value={year.id}>{year.name}</MenuItem>
           )
         })}
         
          </Select>
          </FormControl>
          </Grid>
      
        <Grid item xs={12}>
          <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">المدرس</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          onChange={e=>setTeacherid(e.target.value)}
        required>
         {teachers.map((teacher, index)=>{
           return(
           <MenuItem key={index} value={teacher.id}>{teacher.username}</MenuItem>
           )
         })}
         
          </Select>
          </FormControl>
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
                <MenuItem key={index} value={grp.id}>{grp.title}</MenuItem>
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