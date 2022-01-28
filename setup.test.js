const { beforeAll } = require("@jest/globals");

let animals = [];
beforeEach(()=>{
    animals=["elephant","zebra","bear","tiger"];
})
afterEach(()=>{
    console.log("after each test")
})
beforeAll(()=>{
    console.log("runs once before all tests")
    console.log(animals)
})
test("should add to end of array",()=>{
    animals.push("aligator");
    expect(animals[animals.length-1]).toBe("aligator");
})
test("should add at the beginning of the array",()=>{
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
})
test("should have initial length of 4",()=>{
    expect(animals.length).toBe(4);
})