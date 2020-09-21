import React ,{useState} from "react"
import "./Adminview.css"
import {Grid,Card,CardActionArea ,CardActions ,CardContent ,CardMedia ,Button,Typography  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import placeholder from "./placeholder.jpg"
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
    const classes = useStyles();

    const [admin ,setAdmin] = useState("اسم الادمن");
    const [imgplaceholder , setImgplaceholder] = useState(placeholder)
    return(
        
        <div className="admin-view-form">
            <p className="admin-name">اهلا يا {admin} </p>

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
        <Grid 
        container 
        direction="row"
        justify="center"
        alignItems="center"
        spacing ={5}
        >
          <Grid item>
        <Button variant="contained" className="admin-view-form-button">
          الامتحانات
        </Button>
        </Grid>
        <Grid item>
        <Button variant="contained" className="admin-view-form-button">
          الطلاب
        </Button>
        </Grid>

        </Grid>
      </CardActions>
    </Card>
            </Grid>
            
            </Grid>
        
        </div>
    )
}