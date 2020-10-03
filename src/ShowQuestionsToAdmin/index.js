import React from 'react'
import './showQuestionsToAdmin.css'

const ShowQuestionsToAdmin = () => {
    return (
        <div className = "ContainerQuestionsToAdmin-TM">
            <div className = "headerContainer-TM">
                <h2 className = "examTitle-TM">عنوان الامتحان</h2>
                <div className = "headSection-TM">
                    <button className = "showExamButton-TM">عرض الامتحان</button>
                    <div className = "titleSection-TM">بنك الاسئلة</div>
                </div>
            </div>
            <div className = "makingExamSection-TM">
                <button className = "showExamButton-TM">انشاء سؤال</button>
                <div className = "editingQuestions-TM">
                    <div className = "questionSection-TM">
                        <div className = "editAndDeletequestionButtons-TM">
                            <button className = "editQuestionButton-TM">تعديل</button>
                            <button className = "editQuestionButton-TM">حذف </button>
                        </div>   
                        <h3 style = {{fontWeight: 'bolder', fontSize: 30, marginTop: 9, marginRight: 10}}>السؤال</h3>
                    </div>
                 
                  
                </div>
            </div>
            
        </div>
    )
}

export default ShowQuestionsToAdmin
