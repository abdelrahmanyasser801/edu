import React from 'react';

/*******Yasser  *********/

import Home from "../Home/Home"
import Login from "../Login/Login"
import Teacherlogin from "../Teacherlogin/Teacherlogin"
import Adminlogin from "../Adminlogin/Adminlogin"
import Dashboard from "../Dashboard/Dashboard"
import Addteacher from "../Addteacher/Addteacher"
import Addstudent from "../Addstudent/Addstudent"
import Addquestion from "../Addquestion/Addquestion"
import Addgroup from "../Addgroup/Addgroup"
import Adminview from "../Adminview/Adminview"
import Allquiz from "../Allquiz/Allquiz"
import Quizview from "../Quizview/Quizview"
import Studentview from "../Studentview/Studentview"
import Editteacher from "../Editteacher/Editteacher"
import Addstudentteacher from "../Addstudentteacher/Addstudentteacher"
import Allquizadmin from "../Allquizadmin/Allquizadmin"

// {/* ************** oss  ********* */}
import Studentgrade from "../Studentgrade/Studentgrade"
import ActivationStudents from "../ActivationStudents/ActivationStudents"
import EditStudent from "../EditStudent/EditStudent"
import GradesStudents from "../Grades/index"
import AdminPage from "../AdminPage/index"
import AddQuiz from "../AddQuiz/addQuiz"








import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  }from "react-router-dom";

  
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor:"rgb(64,133,78)",
        height:50,
    },
 
  title: {
    flexGrow: 1,
  },
 
 
}));

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <Router>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.bar}>
          <Typography variant="h6" noWrap className={classes.title}>
            EDU
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
     
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {localStorage.getItem("user")==="std" || 
        localStorage.getItem("user")==="admin" || 
        localStorage.getItem("user")==="teacher"?
        <List>
            
        <Link to='/'>
          <ListItem button>
            <ListItemText primary="logout" onClick={e=> localStorage.clear()} />
          </ListItem>
        </Link> 
        </List> 
      :
        <List>
            
          <Link to='/home'>
            <ListItem button>
              <ListItemText primary="الصفحه الرئيسيه" />
            </ListItem>
          </Link>
          <Link to='/login'>
            <ListItem button>
              <ListItemText primary="تسجيل الدخول" />
            </ListItem>
          </Link>

          <Link to='/addteacher'>
            <ListItem button>
              <ListItemText primary="اضافه مدرس" />
            </ListItem>
          </Link>

          <Link to='/addstudent'>
            <ListItem button>
              <ListItemText primary="اضافه طالب" />
            </ListItem>
          </Link>

          <Link to='/addgroup'>
            <ListItem button>
              <ListItemText primary="اضافه مجموعه" />
            </ListItem>
          </Link>

          <Link to='/addquestion'>
            <ListItem button>
              <ListItemText primary="اضافه سؤال" />
            </ListItem>
          </Link>

          <Link to='/adminview'>
            <ListItem button>
              <ListItemText primary="ادمين" />
            </ListItem>
          </Link>

          <Link to='/allquiz'>
            <ListItem button>
              <ListItemText primary="الامتحانات" />
            </ListItem>
          </Link>

          <Link to='/studentview'>
            <ListItem button>
              <ListItemText primary="عرض الطالب" />
            </ListItem>
          </Link>

          <Link to='/quizview'>
            <ListItem button>
              <ListItemText primary="شكل الامتحان" />
            </ListItem>
          </Link>

          <Link to='/teacherlogin'>
            <ListItem button>
              <ListItemText primary="تسجيل دخول مدرس" />
            </ListItem>
          </Link>

          <Link to='/adminlogin'>
            <ListItem button>
              <ListItemText primary="تسجيل دخول ادمن" />
            </ListItem>
          </Link>
          <Link to='/allquizadmin'>
            <ListItem button>
              <ListItemText primary="allquizadmin" />
            </ListItem>
          </Link>


        {/**osos */}
        <Link to='/grades'>
            <ListItem button>
              <ListItemText primary="grades" />
            </ListItem>
          </Link>

          <Link to='/active'>
            <ListItem button>
              <ListItemText primary="active" />
            </ListItem>
          </Link>

          <Link to='/edit'>
            <ListItem button>
              <ListItemText primary="edit" />
            </ListItem>
          </Link>
          
          <Link to='/studentgrades'>
            <ListItem button>
              <ListItemText primary="studentgrades" />
            </ListItem>
          </Link>
          <Link to='/adminpage'>
            <ListItem button>
              <ListItemText primary="adminpage" />
            </ListItem>
          </Link>


         

          <Link to='/studentgrades'>
            <ListItem button>
              <ListItemText primary="student grades " />
            </ListItem>
          </Link>

          <Link to='/adminpage'>
            <ListItem button>
              <ListItemText primary="  admin " />
            </ListItem>
          </Link>
          <Link to='/addquiz'>
            <ListItem button>
              <ListItemText primary="  اضافة امتحان " />
            </ListItem>
          </Link>
          <Link to='/addstudentteacher'>
            <ListItem button>
              <ListItemText primary="Addstudentteacher " />
            </ListItem>
          </Link>

    </List>
    }
        <Divider />
        
      </Drawer>
      <Switch>
          <Route exact path="/"  component={withRouter(Home)}/>
          <Route exact path="/home"  component={withRouter(Home)}/>
          <Route exact path="/login" component={withRouter(Login)}/>
          <Route exact path="/addteacher" component={withRouter(Addteacher)}/>
          <Route exact path="/addgroup" component={withRouter(Addgroup)}/>
          <Route exact path="/addstudent" component={withRouter(Addstudent)}/>
          <Route exact path="/addquestion" component={withRouter(Addquestion)}/>
          <Route exact path="/adminview" component={withRouter(Adminview)}/>
          <Route exact path="/studentview" component={withRouter(Studentview)}/>
          <Route exact path="/allquiz" component={withRouter(Allquiz)}/>
          <Route exact path="/quizview" component={withRouter(Quizview)}/>
          <Route exact path="/adminlogin" component={withRouter(Adminlogin)}/>
          <Route exact path="/teacherlogin" component={withRouter(Teacherlogin)}/>
          <Route exact path="/dashboard" component={withRouter(Dashboard)}/>
          <Route exact path="/editteacher" component={withRouter(Editteacher)}/>
          <Route exact path="/addstudentteacher" component={withRouter(Addstudentteacher)}/>
          <Route exact path="/allquizadmin" component={withRouter(Allquizadmin)}/>

             {/* ************** oss  ********* */}
          <Route  path="/grades" component={Studentgrade}/>
          <Route  path="/active" component={ActivationStudents}/>
          <Route  path="/edit" component={EditStudent}/>
          <Route  path="/studentgrades" component={GradesStudents}/>
          <Route  path="/adminpage" component={AdminPage}/>
          <Route  path="/addquiz" component={AddQuiz}/>

 

      </Switch>
      </Router>
    </div>
  );
}
