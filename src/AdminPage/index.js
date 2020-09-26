import React from 'react';
import './adminPage.css'

const  AdminPage = () => {
    return (
        <div>
        <div className = "Container-TM">
            <div className = "adminNameAndFunctionsSection-TM">
                <div className = "adminNameSection-TM"> 
                    <h2>أهلا يا عبدالرحمن اسامة</h2>
                </div>
                <div className = "adminFunctionsSection-TM">
                    <button className = "functionButton-TM" >تسجيل طالب</button>
                    <button className = "functionButton-TM" >تسجيل مدرس</button>
                    <button className = "functionButton-TM" >انشاء امتحان</button>
                    <button className = "functionButton-TM" >بنك الاسئلة</button>
                    <button className = "functionButton-TM" >المدرسين </button>
                    <button className = "functionButton-TM" >الطلاب</button>
                    <button className = "functionButton-TM" >جميع الامتحانات</button>
                </div>
            </div>
            <div className = "adminFunctionsSideBar-TM">
                <button className = "functionButtonSideBar-TM" >تسجيل طالب</button>
                <button className = "functionButtonSideBar-TM" >تسجيل مدرس</button>
                <button className = "functionButtonSideBar-TM" >انشاء امتحان</button>
                <button className = "functionButtonSideBar-TM">بنك الاسئلة</button>
                <button className = "functionButtonSideBar-TM" >المدرسين </button>
                <button className = "functionButtonSideBar-TM" >الطلاب</button>
                <button className = "functionButtonSideBar-TM">جميع الامتحانات</button>
            </div>
        </div>
        <div className = "footerContainer-TM">
            hi
        </div>
        </div>
    )
}

export default AdminPage
