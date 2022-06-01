function atras(){
    window.location="index.html";
}
function setup(){
    canvas=createCanvas(700,400);
    canvas.center();
    detector=ml5.objectDetector('cocossd',modelocargado);
document.getElementById("estatus").innerHTML="detectandoobjetos";
}
imagen="";
function preload(){
    imagen=loadImage('carro.jpg');
}
function draw(){
    image(imagen,0,0,700,400);
if(estatus!=""){
    for(i=0; i<objetos.length; i++){
      document.getElementById("estatus").innerHTML="objetos detectados";
      fill('#ff0000');
      noFill();
      stroke('#ff0000');
      presision=floor(objetos[i].confidence*100);
      text(objetos[i].label+ presision+"%",objetos[i].x,objetos[i].y);
      rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height);
    } 
}
}
estatus=""
objetos=[];
function modelocargado(){
    console.log('modelocargado');
    estatus=true;
    detector.detect(imagen,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objetos=results;
    }
}



