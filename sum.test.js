const sum = require('./sum');

describe("toBe & toEqual",()=>{
    test("should return sum of 2 numbers",()=>{
        const result = sum(1,2);
        expect(result).toBe(3);
    })
    test("obj assignment",()=>{
        const obj1={};
        expect(obj1).toEqual({})
    })
})

describe("truthy or falsy",()=>{
     test("null",()=>{
         const n=null;
         expect(n).toBeFalsy();
         expect(n).not.toBeTruthy();
         expect(n).toBeNull();
         expect(n).not.toBeUndefined();
     })
})
describe("numbers",()=>{
    test("2 +2 ",()=>{
        const value = 2+2
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(4)
    })
    test("adding floats",()=>{
        const value = 0.2+0.5
        expect(value).toBeCloseTo(0.7)
    })
 })