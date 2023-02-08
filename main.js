      classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SxwvA4dfr/model.json',modelLoaded);
Webcam.attach( '#camera');
camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie_image" src"'+data_uri+'"/>';    });
}
console.log('ml5 version:',ml5.version);
function modelLoaded(){
    console.log('model loaded');
}
function check(){
    img= document.getElementById0('selfie_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
if(error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;

    persent=results[0].confidence.toFixed(3)* 100;
    console.log(persent);
    document.getElementById("result_object_accuracy").innerHTML= persent+ "%";
    object = result[0].label;
    speak();
}
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data = "tenho "+persent+"porcento de confiança que este objeto é um(a) "+object;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
