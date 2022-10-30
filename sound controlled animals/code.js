function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
    }
     function modelReady() {
        classifier.classify(gotResults);
        }
        function gotResults(error,results) {
           if (error) {
               console.error(error);
           }
        }else {
           console.log (results);
           random_number_r = math.floor(Math.random() *255) +1;
        }  random_number_g = math.floor(Math.random() *255) +1;
           random_number_b = math.floor(Math.random() *255) +1;
           document.getElementById("result label").innerHTML = 'i can hear - '+
           (results[0].confidence*100).toFixed(2)+" %";
           document.getElementById("result label").style.color ="rgb(
               +random_number_r+","+random_number_g","+random_number_b+")";