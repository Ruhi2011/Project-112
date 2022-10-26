Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
 
camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
})
}
console.log("ml5version: ",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/18KhOGbAk/model.json",modelLoaded);
function modelLoaded() {
    console.log("modelLoaded");
}
prediction_1 = "";

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        
        prediction_1 = results[0].label;
        if(results[0].label == "thumbs up") {
            document.getElementById("result_object_gesture_name").innerHTML = "👍";
        }
        if(results[0].label == "thumbs down") {
            document.getElementById("result_object_gesture_name").innerHTML = "👎";
        }
        if(results[0].label == "peace") {
            document.getElementById("result_object_gesture_name").innerHTML = "✌️";
        }
        if(results[0].label == "amazing") {
            document.getElementById("result_object_gesture_name").innerHTML = "👌";
        }
        if(results[0].label == "swag") {
            document.getElementById("result_object_gesture_name").innerHTML = "🤟";
        }
        if(results[0].label == "crossed fingers") {
            document.getElementById("result_object_gesture_name").innerHTML = "🤞";
        }
    } 
}