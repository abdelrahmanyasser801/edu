import React,{useState, useEffect} from "react"
import {Grid  ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField, } from '@material-ui/core/';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { makeStyles } from '@material-ui/core/styles';

import "./Addgroup.css"
import axios from "axios"
import Swal from "sweetalert2"
const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    margin: 5
  },
}));
export default function Addgroup(){
  const classes = useStyles();

  useEffect(()=>{
  axios.get("https://edu-up.herokuapp.com/operators/dashboard/teachers/teacher_id/groups")
  .then(res=>{
    console.log(res)
    setGroups(res.data.school_years)
  })
  .catch(err=>{
    console.log(err)
  })
  
  },[])
 
    const[allgroups,setGroups]=useState([]);
    const[firstgroup,setFirstgroup]=useState("");
    const [currentgroup, setCurrentgroup] = useState('')

   
    const data ={
      groups: [
        {
        "name": "الساعة 9",
        "school_year_id": 1
        },
        {
        "name": "الساعة 10",
        "school_year_id": 1
        },
        {
        "name": "الساعة 11",
        "school_year_id": 1
        },
        {
        "name": "الساعة 12",
        "school_year_id": 2
        }
        ]
    };
     
    const handleChange =(e)=>{
      setCurrentgroup(e.target.value)
      
    }
    const[groupname,setGroupname]=useState([

    ])
    const handleinputchange = (index,e) =>{
      const values =[...groupname];
      values[index][e.target.name]=e.target.value
      setGroupname(values)

    }
    const handleaddinput =()=>{
      setGroupname([...groupname,{grpname:"" , year_id:currentgroup}])
    }
    const handleremoveinput=(index)=>{
     const values=[...groupname];
     values.splice(index,1)
     setGroupname(values)
    }
    const handlesubmit=(e)=>{
      e.preventDefault()
      axios.post("https://edu-up.herokuapp.com/operators/dashboard/teachers/teacher_id/groups",data)
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
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          //window.alert(error.response.status);
          //window.alert(error.response.message);
  
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: status,
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
    
    }
    const handleaddsubmit=(e)=>{
      axios.post("https://edu-up.herokuapp.com/operators/dashboard/teachers/teacher_id/groups",data)
      .then(res=>{
        console.log(res.data)
        if(res.data.teacher_created){
          window.alert("succ")
          console.log("successs")
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
    }
    return(
        <form className="add-grp" onSubmit={handlesubmit}>
          <Grid container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h1>قم باختيار الصف ثم اضغط اضف مجموعه بعدد المجاميع</h1>
          <Grid item >
        <FormControl variant="outlined"className="selector">
        <InputLabel id="demo-simple-select-outlined-label">الصف</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          onChange={handleChange}
        >
          {allgroups.map((group,index)=>{
            return(
              <MenuItem key={index} value={group.id}>{group.name}</MenuItem>
            )
          })}
        
        </Select>
      </FormControl>
      </Grid>
      <Button variant="contained" 
      className="addgroup-btn"
      onClick={()=>handleaddinput()}
      >اضافه مجموعه</Button>

      <Grid item xs={12}>
          {groupname.map((grp ,index)=>{
            return(
              <div key={index}>

              <TextField className="out-input1" 
              name='grpname'
              value={grp.grpname}
             placeholder={`اسم المجموعه ${index+1}`}
             required
             onChange={e=>handleinputchange(index,e)}
            /> 
          <Button
          onClick={()=>handleremoveinput(index)}
          ><DeleteSharpIcon 
          className={classes.root}

          /></Button>
            
             </div>
            )
          })}
        </Grid>
{/** 
        <Grid item xs={12}>
        <InputLabel className="inp10">اسم المجموعه الثانية</InputLabel>
        <TextField className="out-input1" 
         id="outlined-basic" 
          placeholder="ادخل السؤال"  
          required
          onChange={e=>setSecgroup(e.target.value)}
          />
        </Grid>
*/}
     
        <Grid
         container 
         direction="row"
         justify="center"
         alignItems="center"
        spacing={1}
       >
        <Grid item
        >
        <Button variant="contained"
         className="submit-btn"
          type="submit" 
          onClick={handlesubmit}>تسجيل</Button>
        </Grid>

        <Grid item
        >
        <Button variant="contained"
         className="submit-btn" 
         type="submit"
          onClick={handleaddsubmit}>تسجيل و انشاء</Button>
        </Grid>
          
        </Grid>
       
        </Grid>
        </form>
    )
}