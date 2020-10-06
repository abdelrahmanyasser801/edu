import React,{useEffect,useState} from 'react';


import Nav from "./Nav/Nav.js"


// {/* ************** tareq  ********* */}
import ShowQuestionsToAdmin from "./ShowQuestionsToAdmin/index"
import GradesStudents from "./Grades/index"
import AdminPage from "./AdminPage/index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
}from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Nav/>
 
      {/*
      <Router>
        <Switch>
        <Route exact path="/" component={withRouter(Home)} />
        <Route exact path="/addstudent" component={Addstudent}/>
        <Route exact path="/login" component={withRouter(Login)} />
        <Route exact path="/studentview" component={Studentview}/>
        <Route exact path="/adminview" component={Adminview}/>
        <Route exact path="/addteacher" component={Addteacher}/>
        <Route exact path="/addquestion" component={Addquestion}/>
        <Route exact path="/quiz" component={Quizview}/>
        <Route exact path="/allquiz" component={Allquiz}/>
        <Route exact path="/addgroup" component={Addgroup}/>
        </Switch>
      </Router>
    */}
      </div>
  );
}

export default App;
