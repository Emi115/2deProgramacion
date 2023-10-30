import test from 'ava';
import fizzbuzz from "../src/fizzbuzz-ej4.js";

const n = 100;
const condition = {
    2: 'poo',
    3: 'fizz',
    5: 'buzz',
    15: 'foo'
};

    test("2 debe devolver 'poo'",  t => {
        const result = fizzbuzz(2, condition);
        t.is(result, 'poo');
    });

    test("3 debe devolver 'fizz'",  t => {
        const result = fizzbuzz(3, condition);
        t.is(result, 'fizz');
    });

    test("5 debe devolver 'buzz'",  t => {
        const result = fizzbuzz(5, condition);
        t.is(result, 'buzz');
    });

    test("15 debe devolver 'fizzbuzzfoo'",  t => {
        const result = fizzbuzz(15, condition);
        t.is(result, 'fizzbuzzfoo');
    });

    test("6 debe devolver 'poofizz'",  t => {
        const result = fizzbuzz(6, condition);
        t.is(result, 'poofizz');
    });

    test("30 debe devolver 'poofizzbuzzfoo'",  t => {
        const result = fizzbuzz(30, condition);
        t.is(result, 'poofizzbuzzfoo');
    });

    

    



