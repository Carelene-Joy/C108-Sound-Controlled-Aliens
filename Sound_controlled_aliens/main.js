function audioclassify () {
    navigator.mediaDevices.getUserMedia({
        audio:true
    }) 
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-N7Z9-Itc/model.json",modelready)
}

function modelready() {
    console.log("Model is ready")
    classifier.classify(results) // classifier=variable classify=predefined function of ml5.js
}

function results (error,result) {
    if (error) {
        console.log(error)
    }
    else 
    {
        console.log(result)
    }

    var r= Math.round(Math.random() * 256)
    var g= Math.round(Math.random() * 256)
    var b= Math.round(Math.random() * 256)
    var a1= document.getElementById("a1")
    var a2= document.getElementById("a2")
    var a3= document.getElementById("a3")
    var a4= document.getElementById("a4")

    document.getElementById("label").innerHTML="I can hear: "+ result[0].label
    document.getElementById("confidence").innerHTML="Accuracy: "+ (result[0].confidence*100).toFixed(2) + "%"
    document.getElementById("label").style.color="rgb("+r+","+g+","+b+")"
    document.getElementById("confidence").style.color="rgb("+r+","+g+","+b+")"


    if (result[0].label="Clap") {
a1.src="aliens-01.gif"
a2.src="aliens-02.png"
a3.src="aliens-03.png"
a4.src="aliens-04.png"
    }

    else if (result[0].label="Hissing") 
    {
        a1.src="aliens-01.png"
        a2.src="aliens-02.gif"
        a3.src="aliens-03.png"
        a4.src="aliens-04.png"
            }

            else if (result[0].label="Ringtone") 
            {
                a1.src="aliens-01.png"
                a2.src="aliens-02.png"
                a3.src="aliens-03.gif"
                a4.src="aliens-04.png"
            
                    }

                    else if (result[0].label="Background Noise") 
                    {
                        a1.src="aliens-01.png"
                        a2.src="aliens-02.png"
                        a3.src="aliens-03.png"
                        a4.src="aliens-04.gif"
                            }
}

