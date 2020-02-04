import { Practice } from '../src/practice.js';

describe("Practice", () => {

    test("this should correctly identify if a number is divisible by 3", () => {
        var numberDivisableBy3 = new Practice(6);
        expect(numberDivisableBy3.checkNumber()).toEqual("divisable by 3");
    });
    test("this should correctly identify if a number is divisible by 5", () => {
        var numberDivisableBy5 = new Practice(10);
        expect(numberDivisableBy5.checkNumber()).toEqual("divisable by 5")
    })  
})