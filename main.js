Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
    width : 350,
    height : 300,
    img_format : "png",
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= '<img id = "captured_image" src = "'+data_uri+'"/>';
});
}
console.log("ml5 version:",ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5Jar2Xsi9/model.json",modelLoaded);

function modelLoaded() {
console.log("modelLoaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "first prediction is:"+Prediction_1+"and second prediction is:"+Prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}