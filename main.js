var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var Recognition = new SpeechRecognition();
res_num = 1;

function start()
{
    
    Recognition.start();
    //speak();
setTimeout(function(){
    take_snapshot();
},6500);
} 

Recognition.onresult= function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if(content=="Selfie."){
        console.log("taking selfie...");
        speak();
    }
}


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds 5, 4, 3, 2, 1, ";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result"+ res_num).innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
    })
    res_num+=1
}
