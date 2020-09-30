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
 
    const[groups,setGroups]=useState([]);
    const[firstgroup,setFirstgroup]=useState(null);
    const [currentgroup, setCurrentgroup] = useState('')

   
    const data ={
      name:firstgroup,
      school_year_id:currentgroup
    }
     
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
      console.log("group",groupname)
    }
    const handleaddsubmit=(e)=>{
      
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
          {groups.map((group,index)=>{
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
             id="outlined-basic" 
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