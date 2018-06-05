describe("BMICalculator", function(){
    var bmi_calculaator;
    var person;

    beforeEach(function() {
        person = new Person({weight: 90, height: 186});
        calculator = new BMICalculator();
    });

    it("calculates BMI for a person using metric method", function(){
        calculator.metric_bmi(person);
        expect(person.bmiValue).toEqual(26.01);
    });
});