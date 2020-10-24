
function bmifunc(){
    var feetVar = document.querySelector(".feet").value;
    let weightVar = document.querySelector(".inch").value;
    let maxRange=30 
    // add feet and inch

    let meter = feet + "." + inch;

    //feet to meter conversion
    let height = metre/3.2808;

    //Get weight value
    let weight = document.querySelector(".weight").value;
    //BMI calculation
    let bmiCalc = weightVar/Math.pow(height, 2);
    //BMI showing in p taw with condition
    if(bmiCalc < maxRange){
        document.querySelector("p").innerHTML = "Your Body Mass Index (BMI) is -: "+(math.round(bmi*100)/100).toFixed(2) + "<br>" + " index value is Under Weight";
    }

    else if (bmiCalc >= 25 && bmiCalc <= 29.9 ) 
    {
        document.querySelector("p").innerHTML = "Your Body Mass Index (BMI) is -: "+(math.round(bmi*100)/100).toFixed(2) + "<br>" + " index value is Over Weight";
    }
    else if (bmiCalc >30 ){
        document.querySelector("p").innerHTML = "Your Body Mass Index (BMI) is -: "+(math.round(bmi*100)/100).toFixed(2) + "<br>" + " index value is Overweight";

    }
}

// button value
document.querySelector(".btn").addEventListener("click", bmifunc());
