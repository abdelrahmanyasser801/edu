
import React ,{useState} from "react"
import {Grid  ,Select ,FormControl ,FormHelperText ,MenuItem ,InputLabel,Button , IconButton ,TextField } from '@material-ui/core/';
import "./addQuiz.css"
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';


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


      const groupData  = [
      1,2,3
    
      ];


      function getStyles(groupp, group, theme) {
        return {
          fontWeight:
            group.indexOf(groupp) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }

export default function AddQuiz(){

  const [year_id,setYear] = useState()
  const [group,setGroup] = useState([])
  const [subject_id,setSubject]=useState('');
  const [teacher_id,setTeacher]=useState('');
  const theme = useTheme();



    const [dataExam,setDataExam] = useState({
      title:'',
      total_time:'',
      start_date:'',
      end_date:'',
    });

  


        const handleChangeData = (e) => {
          setDataExam({
             ...dataExam
             ,[e.target.name]: e.target.value });
        };


        const handleChangeSubject = (e) => {
          setSubject(e.target.value) 
             ;
        };
        const handleChangeYear = (e) => {
          setYear(e.target.value) 
             ;
        };
       
        const handleChangeTeacher = (e) => {
          setTeacher(e.target.value);
        };
        const handleChangeMultipleGroup = (event) => {
          setGroup(event.target.value);
        };
          // const handleChangeTotalTime = (e) => {
          //   const dataTemp = {...dataExam};
          //   const totalTime= {total_time:e.target.value};
          //   dataTemp={...dataTemp,...totalTime}
          //   setDataExam(dataTemp)

          //      ;
          // };
        
        

        const handleSubmit =(e)=>{
          e.preventDefault();
          console.log(dataExam)

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





    return(
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
                          <MenuItem value={'bio'}>أحياء</MenuItem>
                          <MenuItem value={'chem'}>كيمياء</MenuItem>
                          <MenuItem value={'phy'}>فيزياء</MenuItem>
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
                        value={year_id}
                      >
                          <MenuItem value={1}>الاول</MenuItem>
                          <MenuItem value={2}>الثاني</MenuItem>
                          <MenuItem value={3}>الثالث</MenuItem>
                      </Select>
                   </FormControl>
                </Grid>





              <Grid item xs={12}>
              <InputLabel className="inp1"> عنوان الامتحان</InputLabel>
              <TextField   id="outlined-basic"  placeholder="العنوان " name="title" value={dataExam.title}  onChange={handleChangeData} required/>
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
                      >
                          <MenuItem value={'1'}>حسن</MenuItem>
                          <MenuItem value={'2'}>حسين</MenuItem>
                          <MenuItem value={'3'}>حسانين</MenuItem>
                      </Select>
                   </FormControl>
                </Grid>

                <Grid item xs={12}>
                          <FormControl className={classes.formControl}>
                          <InputLabel id="demo-mutiple-chip-label">المجموعة</InputLabel>
                          <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={group}
                            onChange={handleChangeMultipleGroup}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                              <div className={classes.chips}>
                                {selected.map((value) => (
                                  <Chip key={value} label={value} className={classes.chip} />
                                ))}
                              </div>
                            )}
                            MenuProps={MenuProps}
                          >
                            {groupData.map((groupp) => (
                              <MenuItem key={groupp} value={groupp} style={getStyles(groupp, group, theme)}>
                                {groupp}
                              </MenuItem>
                            ))}
                          </Select>
                </FormControl>
                {/* <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label"> المجموعة</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={subject_id}
                        onChange={handleChangeYear}
                        label="المجموعة"
                      >
                          <MenuItem value={''}>1</MenuItem>
                          <MenuItem value={''}>2</MenuItem>
                          <MenuItem value={''}>3</MenuItem>
                      </Select>
                   </FormControl> */}
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
              <TextField   type="number" id="outlined-basic"  placeholder="المدة " name="total_time"  value={dataExam.total_time}  onChange={handleChangeData} required/>
              </Grid>


                  
                 </Grid>
                 





            <div className="buttons-div" 
                style={{display:'flex'}}
            >
                    <Button type="submit" className="add-button" variant="contained" onClick={handleSubmit} >اضافة</Button>

                </div>
            </form>
        </div>
    )
}