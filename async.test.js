const { expect } = require('@jest/globals');
const axios = require('axios');

function fetchData(id){
    const results = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(results);
    return results.data;
}
//const fetchData = require("./async");
test("should return correct todo", ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then((todo)=>{
       expect(todo.data.id).toBe(1);
   })
})

//const fetchData = require("./async");
test("should return correct todo", async ()=>{
   const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
   expect(result.data.id).toBe(1);
})

