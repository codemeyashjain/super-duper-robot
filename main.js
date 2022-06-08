var x = 0;
var y = 0;
var screen_width = 0;
var screen_height = 0;
var draw_apple = "";
var speak_data = "";
var to_number = "";
var apple = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var x = ""; 
var y = " ";
var recognition = new SpeechRecognition();

function preLoad(){
  apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
  to_number = Number(content);
  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  
  }
  else{
    document.getElementById("status").innerHTML = "The speech has not been recognized"
  }
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width,screen_height-150);
 canvas.position(0,150);
}

function draw() {
  for(let i=0; i++;) { 
  if(draw_apple == "set")
  {
  
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
   
  }
  if((i < to_number) || ( i == to_number)){
    console.log("value of i is bigger or equal to_n var");
    i = i+1;
  }
 x =  Math.floor(Math.random() * 700);
 y =  Math.floor(Math.random() * 400);
 image(apple, x, y, 50, 50)
}
}
document.getElementById("status").innerHTML = to_number + "Apples drawn";
function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number +  "apples draw";
}
speak();
