//sets webcam 
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90 
});
camera=document.getElementById("camera");
//Bottom line of code means there will be a popup allowing the camera
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">'
    })
}
console.log('ml5 version',ml5.version);
//shows that the code is working---------------------------------------------------------------------->
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rwyqNXoxt/',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!')
}