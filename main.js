difference=0
left_wrist_x=0
right_wrist_x=0

function setup(){
    video=createCapture(VIDEO)
    video.size(500,500)
    video.position(10,275)
    canvas=createCanvas(500, 500)
    canvas.center()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);


        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("left_wrist_x = " + left_wrist_x + "right_wrist_x" + right_wrist_x + "difference = " + difference);
    }
}
function draw(){
    background("white")
    fill("black")
    stroke("red")
    strokeWeight(10)
textSize(difference)
     text("Vishal", 250, 250)
    }

