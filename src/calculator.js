BMICalculator.prototype.metric_bmi = function(obj){
    var weight = obj.weight;
    var height = obj.height;
    if (weight > 0 && height > 0) {
        var finalBMI = weight / (height * height / 10000);
        obj.bmiValue = parseFloat(finalBMI.toFixed(2));
        setBMIMessage(obj);
    }
};
function setBMIMessage (obj){
    if (obj.bmiValue < 18.5) {
        obj.bmiMessage = "Underweight"
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = "Healthy"
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
        obj.bmiMessage = "Overweight"
    }
    if (obj.bmiValue > 30) {
        obj.bmiMessage = "Obese"
    }
}