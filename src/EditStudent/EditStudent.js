import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import './EditStudent.css';


export default class EditStudent extends Component {
    render() {
        return (
            <div>
                
                <Container className="welcome-add-cont-os">
                    <h2 style={{color:"white"}} >اضافة طالب  </h2>
                </Container>



                <Container className="student-grade-cont-os">



                        <Container className="label" style={{color:"white",background:"green",maxWidth:"30%", textAlign:"center", height:"30px", marginBottom:"20px", borderRadius:"10px" }}>
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

                                <input  type="text"   name="studentname" placeholder="ابحث  عن الطالب" />
                                <button className="btn-os" >ابحث</button>
                          </Container>







                    <Container className="view-grade-cont-os" >
                        <div>
                            <div className="student-name-oss">
                               <p style={{textAlign:"right" }} className="p-oss">سسسطارق محمد</p>
                            </div>

                            <div className="student-grades-os">
                               <p style={{textAlign:"center" }} className="p-oss"> 50</p>
                            </div>
                            
                            <div>

                                    <button className="btn-os2" >حذف</button>
                                    <button className="btn-os2" >تعديل </button>

                            </div>
                        </div>


                        
                    </Container>

                    



                   


                </Container>


            </div>
        )
    }
}
