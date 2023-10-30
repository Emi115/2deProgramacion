import test from 'ava';
import fizzbuzz from "../src/fizzbuzz.js";

test("Fizzbuzz = 1", t =>{
    const result = fizzbuzz(1);
    t.is(result, 1);
});

test("Fizzbuzz = 2", t =>{
    const result = fizzbuzz(2);
    t.is(result, 2);
});

test("Fizzbuzz = 3", t =>{
    const result = fizzbuzz(3);
    t.is(result,'fizz');
});

test("Fizzbuzz = 4", t =>{
    const result = fizzbuzz(4);
    t.is(result, 4);
});

test("Fizzbuzz = 5", t =>{
    const result = fizzbuzz(5);
    t.is(result,'buzz');
});

test("Fizzbuzz = 20", t => {
    const result = fizzbuzz(20);
    t.is(result, 'buzz');
});

test("Fizzbuzz = 98", t => {
    const result = fizzbuzz(98);
    t.is(result, 98);
});