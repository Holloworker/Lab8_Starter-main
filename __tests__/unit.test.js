// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone number 8589331778', () =>{
    expect(functions.isPhoneNumber("858-933-1778")).toBe(true);
})

test('phone number 8589331768', () =>{
    expect(functions.isPhoneNumber("858-933-1768")).toBe(true);
})

test('phone number 8589331778888', () =>{
    expect(functions.isPhoneNumber(8589331778888)).toBe(false);
})

test('phone number 858933177899', () =>{
    expect(functions.isPhoneNumber(858933177899)).toBe(false);
})

test('email ycz048@uci.edu', () =>{
    expect(functions.isEmail("ycz048@uci.edu")).toBe(true);
})

test('email ycz048@ucsd.edu', () =>{
    expect(functions.isEmail("ycz048@ucsd.edu")).toBe(true);
})

test('email ycz048@uciedu', () =>{
    expect(functions.isEmail("ycz048@uciedu")).toBe(false);
})

test('email ycz048uciedu', () =>{
    expect(functions.isEmail("ycz048uciedu")).toBe(false);
})

test('strongpassword A1234567', () =>{
    expect(functions.isStrongPassword("A1234567")).toBe(true);
})

test('strongpassword A12345_7', () =>{
    expect(functions.isStrongPassword("A12345_7")).toBe(true);
})

test('strongpassword A12', () =>{
    expect(functions.isStrongPassword("A12")).toBe(false);
})

test('strongpassword A1234567891234567', () =>{
    expect(functions.isStrongPassword("A1234567891234567")).toBe(false);
})

test('date 20/11/2022', () =>{
    expect(functions.isDate("20/11/2022")).toBe(true);
})

test('date 01/11/2025', () =>{
    expect(functions.isDate("01/11/2025")).toBe(true);
})

test('date 20/112022', () =>{
    expect(functions.isDate("20/112022")).toBe(false);
})

test('date 20112022', () =>{
    expect(functions.isDate("20112022")).toBe(false);
})

test('Hexcolor #ff0000', () =>{
    expect(functions.isHexColor("ff0000")).toBe(true);
})

test('Hexcolor #0000ff', () =>{
    expect(functions.isHexColor("0000ff")).toBe(true);
})

test('Hexcolor #ff000001', () =>{
    expect(functions.isHexColor("ff000001")).toBe(false);
})

test('Hexcolor ff000', () =>{
    expect(functions.isHexColor("ff000")).toBe(false);
})