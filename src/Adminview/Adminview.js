import React ,{useState, useEffect ,useContext} from "react"
import "./Adminview.css"
import {Grid,Card,CardActionArea ,CardActions ,CardContent ,CardMedia ,Button,Typography  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import placeholder from "./placeholder.jpg"
import axios from "axios"
import { TeachersContext ,Apisdata} from "../Apisdata";
import {Link} from "react-router-dom"
const useStyles = makeStyles({
    root: {
      maxWidth: 275,
      backgroundColor :"rgb(64,133,78)",
      borderRadius:20
    },
    text:{
        color:"white"
    }
  });

export default function Adminview(){
  const [admin ,setAdmin] = useState("اسم الادمن");
  const [imgplaceholder , setImgplaceholder] = useState(placeholder)
  const [allteachers ,setallteachers] = useState([]);
  const [teacherid ,setid] = useState('');

  const abdo = useContext(TeachersContext)


  useEffect (()=>{
    axios.get("https://edu-up.herokuapp.com/operators/dashboard/all_teachers")
    .then(res=>{
      console.log(res.data)
      setallteachers(res.data.teachers)
      this.history.push({
        pathname: '/addstudentteacher',
        search: '?query=ownerInformation',
        state: { data: res.data.teachers }
      })
      
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  
    const classes = useStyles();

  
    const edit =(id ,firstname,e)=>
    {
      window.location.href = "/editteacher";
      localStorage.setItem("teacher_id",id)
      localStorage.setItem("firstname",firstname)

    }
    const Deletestudent =(id , e)=>{
      window.location.href = "/edit";
      localStorage.setItem("teacher_id",id)

    }
    const Addstudent=(id,e)=>{
      localStorage.setItem("teacher_id",id)
    }
   const deleteteacher =(id,e)=>
   {
     
       axios.delete(`https://edu-up.herokuapp.com/operators/dashboard/teachers/${id}`)
      .then(res=>{
        console.log(res.data)
        const newteachers = allteachers.filter(item => item.id !== id);
        setallteachers(newteachers);
       
      })
      .catch(err=>{
        console.log(err)
      })
       
    console.log(id)
 
  }

    return(
        
        <div className="admin-view-form">
            <p className="admin-name">اهلا يا {admin} </p>
            <Grid container  
        justify="center"
        alignItems="center"
        spacing={2}
        >
{allteachers.map((teacher,index)=>{
    return(

            <Grid item
        
            >
            <Card className={classes.root}>
      <CardActionArea>
      
        <CardMedia
          component="img"
          alt="img"
         
          image={teacher.image_url?setImgplaceholder(teacher.image_url):
            imgplaceholder}
          title="img"
          className="cover-img"
        /> 
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {teacher.username}
          </Typography>
          <Typography className={classes.text} variant="h5" align="center"  component="p">
            {teacher.mobile}
          </Typography>
          <Typography className={classes.text} variant="h5" align="center"  component="p">
            {teacher.id}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid 
        container 
        direction="row"
        justify="center"
        alignItems="center"
        spacing ={1}
        >
          <Grid item>
        <Button variant="contained" className="admin-view-form-button">
          الامتحانات
        </Button>
        </Grid>
        <Grid item>
          <Link to="/edit">
          <Button variant="contained" className="admin-view-form-button"
          onClick={e=>Deletestudent(teacher.id ,e)}
          >
          حذف الطالب
        </Button>  
          </Link>
        
        </Grid>
        <Grid item>
          <Link to="/addstudentteacher">
        <Button variant="contained" className="admin-view-form-button"
        onClick={e=>Addstudent(teacher.id,e)} 
        >
        اضافه طالب
        </Button>
        </Link>
        </Grid>

        <Grid item>
        <Button variant="contained"
         className="admin-view-form-button"
         onClick={e=>deleteteacher(teacher.id, e)}

         >
        حذف المدرس        
      </Button>
        </Grid>

        <Grid item>
        <Button variant="contained" 
        className="admin-view-form-button"
        onClick={e=>edit(teacher.id,teacher.username ,e)}
        >
تعديل        </Button>
        </Grid>

        </Grid>
      </CardActions>
    </Card>
            </Grid>
            
          )
})}

</Grid>
   
        </div>
    );
}