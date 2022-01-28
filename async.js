const axios = require('axios');

function fetchData(id){
    const results = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return results.data;
}

module.exports = fetchData;