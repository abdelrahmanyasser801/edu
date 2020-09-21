import React,{useState} from "react"
import {Grid  ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import "./Addgroup.css"
export default function Addgroup(){
    const[group,setGroup]=useState();
    const handleChange =(e)=>{
        setGroup(e.target.value)
    }
    return(
        <form className="add-grp">
          <Grid container
  direction="column"
  justify="center"
          alignItems="center"
          >
          <Grid item >
        <FormControl variant="outlined"className="selector">
        <InputLabel id="demo-simple-select-outlined-label">الصف</InputLabel>
        <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
          value={group}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Button variant="contained" className="addgroup-btn">اضافه مجموعه</Button>

      <Grid item xs={12}>
        <InputLabel className="inp10">اسم المجموعه الاولي</InputLabel>
        <TextField className="out-input1"  id="outlined-basic"  placeholder="ادخل السؤال"   required/>
        </Grid>

        <Grid item xs={12}>
        <InputLabel className="inp10">اسم المجموعه الثانية</InputLabel>
        <TextField className="out-input1"  id="outlined-basic"  placeholder="ادخل السؤال"  required/>
        </Grid>
        <Grid
         container 
         direction="row"
         justify="center"
         alignItems="center"
        spacing={1}
       >
        <Grid item
        >
        <Button variant="contained" className="submit-btn" type="submit">تسجيل</Button>
        </Grid>

        <Grid item
        >
        <Button variant="contained" className="submit-btn" type="submit">تسجيل و انشاء</Button>
        </Grid>
          
        </Grid>
       
        </Grid>
        </form>
    )
}