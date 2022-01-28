const axios = require('axios');

function fetchData(id){
    const results = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return results.data;
}


const forEach = (items,callback)=>{
    for(let i=0;i<items.length;i++){
        callback(items[i])
    }
}

it("mock callback",()=>{
    const mockCalledback=jest.fn(x=>42+x);
    forEach([0,1],mockCalledback);
    expect(mockCalledback.mock.calls.length).toBe(2);
    expect(mockCalledback.mock.calls[0][0]).toBe(0);
    expect(mockCalledback.mock.calls[1][0]).toBe(1);
    expect(mockCalledback.mock.results[0].value).toBe(42);
    expect(mockCalledback.mock.results[1].value).toBe(43);
})

it("mock return values",()=>{
    const mockfunction=jest.fn();
    mockfunction.mockReturnValueOnce(true).mockReturnValueOnce("Hello");
    const results = mockfunction();
    const results2 = mockfunction();
    expect(results).toBe(true);
    expect(results2).toBe("Hello")
})

it("testing axios",async ()=>{
    jest.spyOn(axios,"get").mockReturnValueOnce({
        data:{
            id:1,
            todo:"Water plants every week"
        }
    })
    const results = await fetchData(1);
    expect(results.todo).toBe("Water plants every week")
})