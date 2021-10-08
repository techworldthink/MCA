var init_content1 ="";
var init_content2 ="";
var init_content3 ="";
var init_content4 ="";
var init_content5 ="";


var image_s_1 = " <img src='library/img/software/module1/module1/1.1/1.1-";
var image_e_1 =".jpg' class='mx-auto d-block img-fluid'><br><br>";

var image_s_2 = " <img src='library/img/software/module1/module1/1.2/1.2-";
var image_e_2 =".jpg' class='mx-auto d-block img-fluid'><br><br>";

var image_s_3 = " <img src='library/img/software/module1/module1/1.3/1.3-";
var image_e_3 =".jpg' class='mx-auto d-block img-fluid'><br><br>";

var image_s_4 = " <img src='library/img/software/module1/module1/1.4/1.4-";
var image_e_4 =".jpg' class='mx-auto d-block img-fluid'><br><br>";

var image_s_5 = " <img src='library/img/software/module1/module1/1.5/1.5-";
var image_e_5 =".jpg' class='mx-auto d-block img-fluid'><br><br>";



for(i=1;i<=34;i++){
    if(i<10){
        init_content1 += image_s_1 +"0"+i+image_e_1;
    }
    else{
        init_content1 += image_s_1 +i+image_e_1;
    }
}

for(i=1;i<=80;i++){
    if(i<10){
        init_content2 += image_s_2 +"0"+i+image_e_1;
    }
    else{
        init_content2 += image_s_2 +i+image_e_1;
    }
}

for(i=1;i<=36;i++){
    if(i<10){
        init_content3 += image_s_3 +"0"+i+image_e_1;
    }
    else{
        init_content3 += image_s_3 +i+image_e_1;
    }
}

for(i=1;i<=79;i++){
    if(i<10){
        init_content4 += image_s_4 +"0"+i+image_e_1;
    }
    else{
        init_content4 += image_s_4 +i+image_e_1;
    }
}

for(i=1;i<=50;i++){
    if(i<10){
        init_content5 += image_s_5 +"0"+i+image_e_1;
    }
    else{
        init_content5 += image_s_5 +i+image_e_1;
    }
}


document.getElementById("sec1").innerHTML = init_content1;
document.getElementById("sec2").innerHTML = init_content2;
document.getElementById("sec3").innerHTML = init_content3;
document.getElementById("sec4").innerHTML = init_content4;
document.getElementById("sec5").innerHTML = init_content5;
