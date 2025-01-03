//singleton
//object literals


const mysym = Symbol("key1")
const jsUser ={
    name :"danny",
    age : 25,
    location: "indore",
    email:"ritesh.001@gmail.com",
    [mysym] :"mykey1",
    isLoggedin: false,
    lastLogginDay:["monday","friday"]
}
//console.log(jsUser.email);//first way to access the elemnts
 //console.log(jsUser["email"]);//another way to access the elements
// console.log(jsUser[mysym]);//to acccess symbol values


jsUser.email = "riteshnakum123@gmail.com"//way to change the values of elements in objects
//conole.log(jsUser["email"]);
//Object.freeze(jsUser)
jsUser.email = "riteshnakum1vjhd23@gmail.com"
//console.log(jsUser);

jsUser.greetings = function () {
    console.log("hello JS user");
    
}
jsUser.greetingsTwo = function () {
    console.log(`hello JS user ,${this.name}`);
    
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());



