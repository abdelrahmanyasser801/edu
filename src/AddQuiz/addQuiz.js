
import React, { useState, useEffect } from "react"
import { Grid, Select, FormControl, FormControlLabel, MenuItem, InputLabel, Button, IconButton, TextField, Checkbox } from '@material-ui/core/';
import "./addQuiz.css"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};





function getStyles(groupp, group, theme) {
  return {
    fontWeight:
      group.indexOf(groupp) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddQuiz() {

  const [year_id, setYear] = useState()
  const [subject_id, setSubject] = useState('');
  const [teacher_id, setTeacher] = useState('');

  const [incomeData, setIncomeData] = useState({
    groups: [],
    school_years: [],
    teachers: [],
    subject: [],
  })
  const [filterGroup, setFilterGroup] = useState(incomeData.groups)

  const theme = useTheme();

  const [dataExam, setDataExam] = useState({
    title: '',
    total_time: '',
    start_date: '',
    end_date: '',
    year_id: '',
    teacher_id: '',
    groups_ids: []
    //subject_id: int


  });



  useEffect(() => {
    axios.get("https://edu-up.herokuapp.com/operators/dashboard/exams").then(response => {

      response.data.groups.map(gp => {
        gp.checked = false
      })

      setIncomeData({ ...response.data })
      console.log("Inceme Date : ", response.data)


    })
      .catch(error => {
        console.log(error)

      })

  }, [filterGroup])

  const [yearState, setYearState] = useState(true)
  //year
  const handleChangeData = (e) => {
    setDataExam({
      ...dataExam
      , [e.target.name]: e.target.value
    });

  };


  const handleChangeSubject = (e) => {
    setSubject(e.target.value)
      ;
  };
  const handleChangeYear = (e) => {
    setYear(e.target.value)
    //school_year_id
    const tempFilter = incomeData.groups.filter(group => {
      return group.school_year_id === +e.target.value
    })
    setFilterGroup(tempFilter)
    setYearState(false)
  };
  const [teacherState, setTeacherStaet] = useState(false)
  const handleChangeTeacher = (e) => {
    const tempFilter = filterGroup.filter(group => {
      return group.teacher_id === +e.target.value
    })
    setTeacher(e.target.value);
    setFilterGroup(tempFilter)
    setTeacherStaet(true)
  };

  const [groups_ids, setSelectGroups] = useState([])
  const handleChangeMultipleGroup = (e) => {
    const tempSelect = groups_ids
    if (e.target.checked) {

      tempSelect.push(+e.target.value)
      setSelectGroups(tempSelect)

    } else {
      tempSelect.pop(+e.target.value)
      setSelectGroups(tempSelect)
    }

  };



  const handleSubmit = (e) => {


    e.preventDefault();
    const tempo = {
      ...dataExam,
      "groups_ids": groups_ids,
      "teacher_id": teacher_id
    }
    console.log(tempo)
    axios.post("https://edu-up.herokuapp.com/operators/dashboard/exams", tempo)
      .then(res => {

        if (res.dataExam) {
          console.log('done el7amdulellah')
        } else {
          console.log('error')
        }

      }).catch(error => {
        console.log(error)
      })


  };


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
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  const classes = useStyles();





  return (
    <div className="addquestion-form">
      <form>
        <Grid container spacing={3} xs={12}
          direction="column"
          justify="center"
          alignItems="center"
        >


          <Grid item xs={12}>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">المادة</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChangeSubject}
                label="المادة"
                value={subject_id}
              >
                {incomeData.subject.map(sub => {
                  return (

                    <MenuItem value={sub.id}>{sub.name}</MenuItem>
                  )
                })}

              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">السنة الدراسية</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChangeYear}
                label="السنة الدراسية"
                value={dataExam.year_id}
                name="year_id"
                disabled={!yearState}
              >{

                  incomeData.school_years.map(year => {
                    return (
                      <MenuItem value={year.id}>{year.name}</MenuItem>
                    )
                  })
                }

              </Select>
            </FormControl>
          </Grid>


          {


              /* {incomeData.groups.map(group=>{
                return(
                <h1>{group.id}</h1>
                )
              })} */}


          <Grid item xs={12}>
            <InputLabel className="inp1"> عنوان الامتحان</InputLabel>
            <TextField id="outlined-basic" placeholder="العنوان " name="title" value={dataExam.title} onChange={handleChangeData} required />
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label"> المدرس</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label=" المدرس"
                value={teacher_id}
                onChange={handleChangeTeacher}
                disabled={teacherState || yearState}
              >

                {
                  incomeData.teachers.map(teacher => {

                    return (
                      <MenuItem value={teacher.id}>{teacher.username}</MenuItem>

                    )

                  })

                }

              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>

            {
              filterGroup.map(gp => {
                return (

                  <FormControlLabel control={<Checkbox
                    value={gp.id}
                    id={gp.id}
                    onChange={handleChangeMultipleGroup}
                  />}
                    label={gp.title} />

                )
              })
            }


          </Grid>



          <Grid item xs={12}>

            <form className={classes.container} noValidate>
              <TextField
                id="datetime-local"
                label=" وقت البدأ"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChangeData}
                value={dataExam.start_date}
                name="start_date"
              />
            </form>

          </Grid>

          <Grid item xs={12}>

            <form className={classes.container} noValidate>
              <TextField
                id="datetime-local"
                label="وقت الانتهاء "
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChangeData}
                value={dataExam.end_date}
                name="end_date"
              />
            </form>

          </Grid>

          <Grid item xs={12}>
            <InputLabel className="inp1">  مدة الامتحان</InputLabel>
            <TextField type="number" id="outlined-basic" placeholder="المدة " name="total_time" value={dataExam.total_time} onChange={handleChangeData} required />
          </Grid>



        </Grid>






        <div className="buttons-div"
          style={{ display: 'flex' }}
        >
          <Button type="submit" className="add-button" variant="contained" onClick={handleSubmit} >اضافة</Button>

        </div>
      </form>
    </div>
  )
}
