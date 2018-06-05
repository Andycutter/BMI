const { expect } = require('chai');
const { Person, BMICalculator } = require('./spec.helper');

describe("Person",() => {
    let person = new Person({
        weight: 90,
        height: 186
    });
    it("should have weight of 90", () => {
        expect(person.weight).to.equal(90);
    });
    it("should have height of 186", () => {
        expect(person.height).to.equal.apply(186);
    });
});