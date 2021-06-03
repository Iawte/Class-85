var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var roverX = 10;
var roverY = 10;
var width = 100;
var height = 90;
var bgImg = "mars.jpg";
var roverImg = "rover.png";

function add() {
    bgImgTag = new Image();
    bgImgTag.onload = uploadBg;
    bgImgTag.src = bgImg;
    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImg;
}

function uploadBg() {
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);
}


function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, width, height);
}

window.addEventListener("keydown", keydownFunction);

function keydownFunction(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        console.log("left")
        left();
    }

    if (keyPressed == "38") {
        console.log("up")
        up()
    }
    if (keyPressed == "39") {
        console.log("right")
        right()
    }
    if (keyPressed == "40") {
        console.log("down")
        down()
    }
}

function up(){
    if(roverY>=0){
        roverY=roverY-10;
        console.log("x="+roverX+" y="+roverY);
        uploadBg();
        uploadRover();
    }
}

function down(){
   if(roverY<430){
       roverY=roverY+10;
       console.log("x="+roverX+" y="+roverY);
       uploadBg();
       uploadRover();
   }    
}

function left(){
if(roverX>=0){
    roverX=roverX-10;
    console.log("x="+roverX+" y="+roverY);
    uploadBg();
    uploadRover();
}
}

function right(){
    if(roverX<=500){
        roverX=roverX+10;
        console.log("x="+roverX+" y="+roverY);
        uploadBg();
        uploadRover();
    }
}



