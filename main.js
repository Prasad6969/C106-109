function recordaudio() {
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wNBKTYSOq/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
dog = 0;
cat = 0;
lion = 0;
cow = 0;
function gotResults(error, results) {
    if(results) {
    console.log("got results");
    document.getElementById("confidence").innerHTML = "The Detected Noise is Of - " + results[0].label;
    document.getElementById("detected_voice").innerHTML = "'Detected Dog - '"+ dog +"' Detected Cat - '"+ cat +"' Detected Lion - '"+ lion +"' Detected Cow - '"+ cow +"'";
    img = document.getElementById("animal_name_image");
    if (results[0].label == "Barking") { 
        img.src = 'bark.gif'; dog = dog + 1; 
    } 
    else if (results[0].label == "Meowing") { 
        img.src = 'meow.gif'; cat = cat + 1; 
    }
    else if(results[0].label == "Roaring") {
        img.src = 'roar.gif'; lion = lion + 1;
    }
    else if(results[0].label == "Mooing") {
        img.src = 'moo.gif'; cow = cow + 1;
    }
    else { 
        img.src = 'listen.jfif';
    }
  }

    else {
        console.log("error");
    }
    
}
