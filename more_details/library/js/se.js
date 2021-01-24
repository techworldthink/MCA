var init_content ="";
var image_s_1 = " <img src='library/img/software/module1/module1/1.1/1.1-";
var image_e_1 =".jpg' class='mx-auto d-block img-fluid'><br><br>";

for(i=1;i<=34;i++){
    if(i<10){
        init_content += image_s_1 +"0"+i+image_e_1;
    }
    else{
        init_content += image_s_1 +i+image_e_1;
    }
   
}
document.getElementById("sec1").innerHTML = init_content;