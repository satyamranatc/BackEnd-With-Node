let fs = require('fs');
let http = require("http");
let ejs = require('ejs');
let Page = fs.readFileSync("./Home.pug", "utf8");
const pug = require('pug');
let Products = [
    {
        "id":1,
        "name":"Laptop",
        "price":100,
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id":2,
        "name":"Mouse",
        "price":200,
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id":3,
        "name":"Keyboard",
        "price":300,
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    }


]



http.createServer((req,res)=>
{

    res.writeHead(200,{"Content-Type":"text/html"})
    let MyPage = pug.compile(Page);
    const x = MyPage({ name: 'John' });

    res.end(x);

}).listen(4500,()=>{
    console.log("Server is running on port 4500");
}).on('error', (error) => {
    console.error('Error occurred:', error);
});