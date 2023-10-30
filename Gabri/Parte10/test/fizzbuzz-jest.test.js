//import {jest} from '@jest/globals';
import fizzbuzz from "../src/fizzbuzz.js";

describe('Testing fizzbuzz function', () => {
    test("Return 1", () => {
        expect(fizzbuzz(1)).toBe(1);
    });

    test("Return fizz", () => {
        expect(fizzbuzz(3)).toBe("fizz");
    });

    test("Return buzz", () => {
        expect(fizzbuzz(5)).toBe("buzz");
    });

    test("Return fizzbuzz", () => {
        expect(fizzbuzz(15)).toBe("fizzbuzz");
    });
});