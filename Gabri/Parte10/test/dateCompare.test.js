import test from 'ava';
import dateCompare from "../src/dateCompare.js";

const date1 = '2022-12-07T00:00:00.000Z';
const date2 = '2022-11-22T00:00:00.000Z';

const buildObject =(date1, date2) => ({
    startDate: date1,
    endDate: date2,
});

test("Fecha 1 es anterior a fecha 2", t => {
    const result = dateCompare(date1, date2);
    const expectedResult = buildObject(date1, date2);
    t.deepEqual(result, expectedResult);
});

test("Fecha 1 es posterior a fecha 2", t => {
    const result = dateCompare(date2, date1);
    const expectedResult = buildObject(date1, date2);
    t.deepEqual(result, expectedResult);
});

test("Fecha 1 es igual a fecha 2", t => {
    const result = dateCompare(date1, date1);
    const expectedResult = buildObject(date1, date1);
    t.deepEqual(result, expectedResult);
});

test("Fecha 1 es anterior a la actual", t => {
    const result = dateCompare(date1);
    t.deepEqual(result.startDate, date1);
});

test("Fecha 1 es posterior a la actual", t => {
    const mañana = new Date((new Date()).getTime()+24*60*60*1000);
    const result = dateCompare(mañana);
    t.deepEqual(result.endDate, mañana);
});
