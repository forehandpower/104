setTimeout(function()
{
    img_id  = "selfie1";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}, 5000);

setTimeout(function()
{
    img_id  = "selfie2";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}, 5000);

setTimeout(function()
{
    img_id  = "selfie3";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}, 5000);

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(funtion(data_uri){
        i+(img_id=="selfie"){
            document.getElementById()
        }
    })
}



