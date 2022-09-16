noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
diffrence=0;
function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500);
  canvas=createCanvas(550,550);
  canvas.position(560,150);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
  console.log("modelLoaded");
}
function gotPoses(results)
{
if(results.length>0)
{
  console.log(results);
  leftwristX=results[0].pose.leftWrist.x;
  rightwristX=results[0].pose.rightWrist.x;
  diffrence=floor(leftwristX-rightwristX);
}
}
function draw()
{
  background('#b300b3')
  textSize(diffrence);
  document.getElementById("font_size").innerHTML="Font size will be"+diffrence+"px";
  text('Aahana',50,400)
  fill('#000000');
  }

