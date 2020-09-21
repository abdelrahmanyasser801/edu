import React from "react"
import cover from "./cover.jpg"
import {Grid , Button} from '@material-ui/core';
import icon from "./icon.png"
import "./Home.css"
export default function Home(){
    return(
        <div>
            <div class="container">
                <img src={cover} alt="Norway" />
                <div class="text-block">
                    <h4>EDU Up</h4>
                    <p>نسعي لمستقبل افضل</p>
                    <p>للتعليم</p>
                </div>
            </div>
            <div className="headers">
            <h3>لماذا تستخدم الموقع التعليمي الخاص بنا؟</h3>
            <h4>هل تحتاج الي بعض الاختبارات المفيدة و الجاده للطلاب ؟</h4>
            <h4>ام تريد تقديم شروحات سهله و بسيطه لهم ؟</h4>
            <h4>ابدأ في استخدام الموقع النعليمي الخاص بنا و سيصبح كل هذا ممكن و بسهولة</h4>
            </div>
            <div className="intro">
            <Grid container xs={12} spacing={2}
           direction="row"
           justify="center"
           alignItems="flex-start"
            >
            <Grid item xs={3}>
                <img src={icon} className="icon"/>
            </Grid>

            <Grid item xs={3} 
           container
           direction="column"
           justify="flex-start"
           alignItems="center"
           >
                <h2>نبذه عنا</h2>
            </Grid>
            <Grid item xs={3} container
            direction="column"
            justify="flex-end"
            alignItems="flex-end">
                <h1>من نحن ؟   </h1> 
            </Grid>
            </Grid>
            <h3>نحن نخبه من المهندسين نسعي لتوفير طرق افضل للتعليم الالكتروني انواكب العصر و متطلباته</h3> 

            </div>
            <div className="end">
                <h1>ماذا نقدم ؟</h1>
                <h3>نحن نقدم لطلابنا سلسة من الامتحانات الالكترونية في جميع المواد و بعض المراجعات المختلفه بالطرق <br/> التي تواكب متطلبات العصر <br/> و نحن في مرحلة التطوير لنقدم فيديوهات شرح للمواد و فيديوهات للمراجعه تكون باسلوب سهل و بسيط <br/> لكي نخرج طلاب علي اعلي مستوي من التقدم العلمي التكنولوجي </h3>
            </div>
        </div>
    )
}