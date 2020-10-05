import React, { useState, useEffect } from "react"
import "./Studentview.css"
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import placeholder from "./placeholder.jpg"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from "axios"
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  root: {
    maxWidth: 275,
    backgroundColor: "rgb(64,133,78)",
    borderRadius: 20
  },
  text: {
    color: "white"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: 20,
    backgroundColor: "rgb(158, 79, 144)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(64,133,78)"
    }
  },
}));
export default function Studentview() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const [student, setStudent] = useState("اسم الطالب");
  const [imgplaceholder, setImgplaceholder] = useState(placeholder)
  const [allTeacher, setAllTeacher] = useState([

  ])//teachers
  const [allExams, setAllExams] = useState([

  ])


  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }

    axios.get("https://edu-up.herokuapp.com/students/profile/teachers", config)
      .then(res => {
        //console.log("teeet", res)
        setAllExams(res.data.active_exams)
        setAllTeacher(res.data.student_teachers)
        console.log("allExams Is API : ", allExams)

      }).catch(err => {
        console.log(err)
      })

  }, [])

  const passTeacherID = (id, e) => {
    localStorage.setItem("exam_teacher_id", id)
  }
  return (

    <div className="view-form">
      <p className="student-name">اهلا يا {student} </p>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        sm={12}
      >
        {allTeacher.map((teacher, index) => {
          return (
            <Grid item
              className="exam-card"
              key={teacher.id}
              sm={3}
              xs={12}
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
                        {teacher.username}
                      </Typography>


                      <Typography className={classes.text} variant="h5" align="center" component="p">

                        <h3>{teacher.mobile}</h3>
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
                      <Link to="/allquiz">
                        <Button className={classes.button}
                          onClick={e => passTeacherID(teacher.id, e)}
                          variant="contained">امتحانات</Button>

                      </Link>
                      <Button className={classes.button} variant="contained">مذكرات المدرس</Button>
                      <Button className={classes.button} variant="contained">غرفه التدريس</Button>
                      <Button variant="contained" color="secondary" onClick={handleClose}>اغلق</Button>
                    </div>
                  </Fade>
                </Modal>
              </Grid>


            </Grid>
          )
        })}
      </Grid>

    </div>
  )
}