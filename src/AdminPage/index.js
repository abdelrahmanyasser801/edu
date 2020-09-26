import React from 'react';
import './adminPage.css';
import Container from '@material-ui/core/Container';

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
                    <button className = "functionButton-TM" >تسجيل طالب</button>
                    <button className = "functionButton-TM" >تسجيل مدرس</button>
                    <button className = "functionButton-TM" >انشاء امتحان</button>
                    <button className = "functionButton-TM" >بنك الاسئلة</button>
                    <button className = "functionButton-TM" >المدرسين </button>
                    <button className = "functionButton-TM" >الطلاب</button>
                    <button className = "functionButton-TM" >جميع الامتحانات</button>
                </div>

                </Container>
            </div>
        </div>
        </div>
    )
}

export default AdminPage
