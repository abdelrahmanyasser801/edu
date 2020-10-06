import React from 'react';
import './adminPage.css';
import Container from '@material-ui/core/Container';
import Addstudent from "../Addstudent/Addstudent"
import Addteacher from "../Addteacher/Addteacher"
import Addquiz from "../AddQuiz/addQuiz"
import Showquestionstoadmin from "../ShowQuestionsToAdmin/index"
import Adminview from "../Adminview/Adminview"
import Allstudents from "../Allstudents/Allstudents"
import Allquizadmin from "../Allquizadmin/Allquizadmin"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  }from "react-router-dom";

  

const  AdminPage = () => {
    return (
        <div>
        <div className = "Container-TM">
            <div className = "adminNameAndFunctionsSection-TM">
                <div className = "adminNameSection-TM"> 
                    <h2>أهلا يا عبدالرحمن اسامة</h2>
                </div>

                <Container>

                <div className = "adminFunctionsSection-TM">
                    <Link to="/addstudent">
                    <button className = "functionButton-TM" >تسجيل طالب</button>
                    </Link>

                    <Link to="/addteacher">
                    <button className = "functionButton-TM" >تسجيل مدرس</button>
                    </Link>

                    <Link to="/addquiz">
                    <button className = "functionButton-TM" >انشاء امتحان</button>
                    </Link>
                     {/**مش شغاله بنك الاساله مش لاقيه */}
                    <Link to="/showquestiontoadmin"> 
                    <button className = "functionButton-TM" >بنك الاسئلة</button>                    
                    </Link>

                    <Link to="/adminview">
                    <button className = "functionButton-TM" >المدرسين </button>                    
                    </Link>

                    <Link to="/allstudents">
                    <button className = "functionButton-TM" >الطلاب</button>                    
                    </Link>

                    <Link to="/allquizadmin">
                    <button className = "functionButton-TM" >جميع الامتحانات</button>                    
                    </Link>
                    
                </div>

                </Container>
            </div>
        </div>
        </div>
    )
}

export default AdminPage
