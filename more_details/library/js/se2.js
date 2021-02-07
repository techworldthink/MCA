
var init_content6 ="";

var image_s_6 = " <img src='library/img/software/module 2/Git-";
var image_e_6 =".jpg' class='mx-auto d-block img-fluid'><br><br>";

for(i=1;i<82;i++){
    if(i<10){
        init_content6 += image_s_6 +"0"+i+image_e_6;
    }
    else{
        init_content6 += image_s_6 +i+image_e_6;
    }
}



document.getElementById("sec6").innerHTML = init_content6;