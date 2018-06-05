const fs = require('fs');

let calc = fs.readFileSync('./src/calculator.js');
let person = fs.readFileSync('./src/person.js');
eval( person + `\nexports.Person = Person;\nexports.BMICalculator = BMICalculator;`)
