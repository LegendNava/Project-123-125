var noseX = 0;
var noseY = 0;
var rightWristX = 0;
var leftWristX = 0;
var difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(700, 600);
    canvas.position(550, 150);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses)
}

function modelloaded() {
    console.log("The Model is Loaded");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        rightWristX = result[0].pose.rightWrist.x;
        leftWristX = result[0].pose.leftWrist.x;
        difference = leftWristX - rightWristX;
        console.log("X of Nose: " + noseX + "Y of Nose: " + noseY + "X of Right Wrist: " + rightWristX + "X of Left Wrist" + leftWristX + "Difference between the Wrists: " + difference);
    }
}

function draw() {
    background('#1982bf');
    fill('green');
    stroke('#1e8f47');
    text("Hello",noseX,noseY)
    textSize(difference)
    //square(noseX, noseY, difference);
    document.getElementById("square-side").innerHTML = "Size of the text is: " + Math.floor(difference) + "x" + Math.floor(difference) + " px";
}