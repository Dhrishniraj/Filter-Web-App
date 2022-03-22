function preload(){
    goggles = loadImage("https://i.postimg.cc/TYRrp9Vq/10-105130-picsart-png-clipart-images-black-sunglasses-beautiful-cartoon-removebg-preview-1.png");
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(400, 300);
    video = createCapture(VIDEO);
    video.hide();
    my_poses = ml5.poseNet(video, modelLoaded);
    my_poses.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Welcome!");
}
function draw(){
    background("white");
    x_goggles = (right_eye_x - (width_goggles / 4*5));
    width_goggles = ((left_eye_x - right_eye_x) * (5/4)) * 3/2.5;
    height_goggles = width_goggles / 8 * 3;
    y_goggles = (right_eye_y - (height_goggles / 2));
    image(video, 0, 0, 640, 480);
    image(goggles, x_goggles, y_goggles, width_goggles, height_goggles);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        right_eye_x = results[0].pose.rightEye.x;
        right_eye_y = results[0].pose.rightEye.y;
        left_eye_x = results[0].pose.leftEye.x;
        left_eye_y = results[0].pose.leftEye.y;
    }
}