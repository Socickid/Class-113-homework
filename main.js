function preload(){
  }
  function setup(){
    Canvas = createCanvas(500, 500);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
  }
  function draw(){
    background ("blue")
    circle (50, 50, 60)
    circle (50, 450, 60)
    circle (450, 450, 60)
    circle (450, 50, 60)
    square (35, 32, 430, 35)
    square (32, 35, 35, 430)
    square (432, 32, 35, 430)
    square (32, 432, 430, 35)

    
    image(Video, 100, 100, 300, 300)
  }
function TakeSnap(){
  save("Bob.png")
}