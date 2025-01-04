function myNameis(){
    console.log("r");
    console.log("i");
    console.log("T");
    console.log("e");
    console.log("s");
    console.log("h");
     
}
// myNameis()
function addTwo(num1 , num2){ //parameters
    console.log(num1 + num2);

}
addTwo(1234256 , 75623894)//arguments

function addTwo(num1 , num2){ //parameters
// const result = num1 +num2
// return result

return num1 + num2

}
const result =addTwo(10,21)
// console.log("Result: " ,result);



function loginUserMsg (username){
    if(username === "hey"){
       
        console.log("please enter a name");
       return 
    }
   
    return`${username} just logged in`
}

// console.log(loginUserMsg())

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200 ,400 ,600));

// const user={
//     username: "ritesh",
//     age: 24
// }
function handleUser(anyobject){
console.log(`username is ${anyobject.username} and age is  ${anyobject.age} `);

}
// handleUser(user)
handleUser({
    username:"sammy",
    age : 234
})
const myNewarry = [100 , 454 , 776 ,546,222 ,86]
function returnNew(getArray){
    return getArray[0]
}
console.log(returnNew(myNewarry));
