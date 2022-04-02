noseX=0;
noseY=0;
difference = 0;
rightWristX =0;
leftWristX = 0;





function setup()  {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);

}

function modelLoaded() {
    console.log('poseNet Is Initialized!');
}
function gotPoses(results){
leftWristX = results[0].pose.leftWrist,x;
rightWristX = results[0].pose.rightWrist,x;


}
function draw() {
    background('#969A97');
    textSize(10);
    Fill('#FFE787');
    text('peter',50,400)

}

function gotPoses(results)
{
    if(results.length > 0)

    {
        console.log(results);
       
        leftWristX = results[0].pose.leftWrist,x;
        rightWristX = results[0].pose.rightWrist,x;
        difference = floor(leftWristX - rightWristx);

    }
}

function deaw(){
    background('#6C91C2');

    textSize(difference);
    fill('#FFE78');
    text('pater',50,400);
}