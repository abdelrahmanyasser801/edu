import React from 'react';
import './grades.css';


const GradesStudents = () => {
    return (
        <div className = "gradesComponent__Container__TM">
            <div className = "teacherName__Section__TM" >اسم المدرس</div>
            <div  className = "gradesTable__Section__TM">
                <table cellSpacing = "0">
                    <thead>
                        <th>اسم الامتحان</th>
                        <th>تاريخ الامتحان</th>
                        <th>درجة الطالب</th>
                        <th>الدرجة النهائية</th>
                    </thead>
                    <tbody>
                        <td>55</td>
                        <td>55</td>
                        <td>55</td>
                        <td>55</td>
                    </tbody>
                </table>
            </div>
         
       
        </div>
    )
}

export default GradesStudents