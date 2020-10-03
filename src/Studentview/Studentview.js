import React ,{useState, useEffect} from "react"
import "./Studentview.css"
import {Grid,Card,CardActionArea ,CardActions ,CardContent ,CardMedia ,Button,Typography  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import placeholder from "./placeholder.jpg"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from "axios"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
    root: {
      maxWidth: 275,
      backgroundColor :"rgb(64,133,78)",
      borderRadius:20
    },
    text:{
        color:"white"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button:{
      margin:20,
      backgroundColor :"rgb(158, 79, 144)",
       color:"white" ,
       "&:hover":{
          backgroundColor:"rgb(64,133,78)"
       }
    },
  }));
  export default function Studentview(){
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const classes = useStyles();

    const [student ,setStudent] = useState("اسم الطالب");
    const [imgplaceholder , setImgplaceholder] = useState(placeholder)

    useEffect(()=>{
      const config ={
        headers:{
          Authorization : "Bearer " + localStorage.getItem('token')
        }
      }
      axios.get("",config)
        .then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
    })
    return(
        
        <div className="view-form">
            <p className="student-name">اهلا يا {student} </p>

        <Grid container 
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        >
            <Grid item>
            <Card className={classes.root}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          alt="img"
         
          image={imgplaceholder}
          title="img"
          className="cover-img"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            اسم المدرس
          </Typography>
          <Typography className={classes.text} variant="h5" align="center"  component="p">
            الماده
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" className="view-form-button" onClick={handleOpen}>
          اضغط هنا
        </Button>
       
      </CardActions>
    </Card>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">اختر ماذا تريد</h2>
          <Button className={classes.button} variant="contained">امتحانات</Button>
          <Button className={classes.button} variant="contained">مذكرات المدرس</Button>
          <Button className={classes.button} variant="contained">غرفه التدريس</Button>
          <Button  variant="contained" color="secondary" onClick={handleClose}>اغلق</Button>
          </div>
        </Fade>
      </Modal>
            </Grid>

        
        </Grid>
        </div>
    )
}