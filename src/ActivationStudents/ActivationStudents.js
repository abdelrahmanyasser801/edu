import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import './ActivationStudents.css';


export default class ActivationStudents extends Component {
    render() {
        return (
            <div>
                
                <Container className="welcome-exam-cont-os">
                    <h2 style={{color:"white"}} >الامتحان  </h2>
                </Container>



                <Container className="student-grade-cont-os">



                        <Container className="label-os" style={{color:"white",background:"green",maxWidth:"30%", textAlign:"center", height:"40px", marginBottom:"20px", borderRadius:"10px",}}>
                            <h3 className="cont-h3"  >الطلاب</h3>
                        </Container>




                        <Container className="search-grade-cont-os" >
                                <Container className="custom-select" >
                                    <select className="select-os" >
                                        <option className="option" value="0">الصف</option>
                                        <option value="1">الاول</option>
                                        <option value="2">الثاني</option>
                                        <option value="3">الثالث</option>
                                    </select>
                                </Container>

                                <Container className="custom-select" >
                                    <select className="select-os" >
                                        <option className="option" value="0">المجموعات</option>
                                        <option value="1">الاول</option>
                                        <option value="2">الثاني</option>
                                        <option value="3">الثالث</option>
                                    </select>
                                </Container>
                                <Container className="custom-select" >
                                    <select className="select-os" >
                                        <option className="option" value="0">المدرس</option>
                                        <option value="1">الاول</option>
                                        <option value="2">الثاني</option>
                                        <option value="3">الثالث</option>
                                    </select>
                                </Container>

                                <input  className="input-os" type="text"   name="studentname" placeholder="ابحث  عن الطالب" />
                                <button className="btn-os" >ابحث</button>
                          </Container>







                    <Container className="view-grade-cont-os" >

                        <div>

                            <div className="student-name-os">
                               <p style={{textAlign:"right" }} className="p-oss">سسسطارق محمد</p>
                            </div>
                            
                            <button className="btn-active-os" >تفعيل</button>
                            <button className="btn-active-os" >عدم تفعيل</button>

                        </div>

                     <div>

                            <div className="student-name-os">
                               <p style={{textAlign:"right" }} className="p-oss">سسسطارق محمد</p>
                            </div>
                            
                            <button className="btn-active-os" >تفعيل</button>
                            <button className="btn-active-os" >عدم تفعيل</button>

                        </div>

                                    

                    </Container>

                    



                   


                </Container>


            </div>
        )
    }
}
