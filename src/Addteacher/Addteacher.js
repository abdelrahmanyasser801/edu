import React ,{useState,useEffect}from "react"
import "./Addteacher.css"
import {Grid, Input ,InputAdornment , Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Swal from "sweetalert2"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from "axios"
export default function Addteacher(){
  useEffect (()=>{
    axios.get("https://edu-up.herokuapp.com/operators/dashboard/teachers")
    .then(res=>{
      console.log(res.data)
      setAllsubjects(res.data.subjects)
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


      {/**api array */}
      const [allsubjects, setAllsubjects] = useState([]);


      const [password ,setPassword] =useState(null)
      const [name ,setName] =useState(null)
      const [phone ,setPhone] =useState(null)
      const [img ,setImg] =useState(null)
      const [imgData, setImgData] = useState(null);
      const [currentsub , setCurrentsub] =useState(allsubjects)

    
    const classes = useStyles();

          {/** POST DATA*/}
          const data={
            username:name,
            password:password,
            mobile:phone,
            image_url:imgData,
            subject_id:currentsub
          }
    
    const handleChange = (event) => {
      setCurrentsub(event.target.value);
    };
    const handleimage = e => {
      if (e.target.files[0]) {
        console.log("picture: ", e.target.files);
        setImg(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    };
    const phonenumber = (e) =>
{
    e.preventDefault()
    axios.post("https://edu-up.herokuapp.com/operators/dashboard/teachers",data)
    .then(res=>{
      console.log(res.data)
      if(res.data.teacher_created){
        window.alert("succ")
        console.log("successs")
      }
    }).catch(err=>{
      console.log(err)
      if (err.response) {
        const status =err.response.status;
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        //window.alert(error.response.status);
        //window.alert(error.response.message);
        window.alert(err.response.data);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: status,
        });        return false;
        

      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        window.alert(err.request);

      } else {
        // Something happened in setting up the request that triggered an Error
        window.alert('Error', err.message);
      }
    
    })   
    console.log(currentsub)
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

        <div className="teacher-form">
            <h1 className="student-title">تسجيل المدرس</h1>
            <div>
            <Grid container spacing={3} 
            direction="column"
            justify="center"
            alignItems="center"
            >
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل اسم المدرس</InputLabel>
        <TextField
         className="out-input"
          id="outlined-basic" 
           placeholder="ادخل اسم المدرس" 
           onChange={e=>setName(e.target.value)}
           required/>
        </Grid>
        <Grid item xs={12}>
        <InputLabel className="inp1">ادخل الرقم السري</InputLabel>
        <Input
        autoComplete="current-password"
        className="out-input"
         placeholder="ادخل الرقم السري"  required
        id="standard-adornment-password"
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
        
        
        />
              </Grid>


        
          <Grid item xs={12}>
          <InputLabel className="inp1">ادخل رقم الهاتف</InputLabel>

          <TextField
          onChange={e=>setPhone(e.target.value)}
            type="tel" pattern="^\d{4}-\d{3}-\d{4}$"
             required 
             className="out-input"
              id="outlined-basic3"
               placeholder="ادخل رقم الهاتف"  />
          </Grid>


              <Grid item xs={12}>
              <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">الماده</InputLabel>
            <Select
             labelId="demo-simple-select-outlined-label"
             id="demo-simple-select-outlined"
             required
             onChange={handleChange}
           > 
           {allsubjects.map(sub=>{
             return(

             <MenuItem key={sub.id} id={sub.id} value={sub.id}>{sub.name}</MenuItem>
             )
           })}
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
        onChange={handleimage}
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
        
        <Grid item xs={12}>
      <Button type="submit" variant="contained"  className="sub-button">تسجيل</Button>
      </Grid> 
      </Grid>
      
            </div>
        </div>
        </form>
    )
}