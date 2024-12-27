//Primitive DataTypes
// 7 types:=> String , Number , NULL , Boolean , UNdefined , Symbol ,BigInt;

const num = 100
const num1 = 100.01

const isNumber = false
const outSideTemp = null
let userMail;    //undefined 


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 278473498585n


//Refernce/NoN-primitive datatypes
//Arrays , Objects ,Functions

const colors = ["yellow" , "black" ,"red" ,"white" ,"blue"]

//objects
let myBio = {
 name: "ritesh",
 age: 25,
number : 9988779899
}

//functions
const myFunction  = function(){
console.log("hello ji");

}

//------------------------------------------------------------------------------------------------
//memory
//Stack(primitive), Heap(non-primitive);
//stack
let myNameIs = "ritesh_nakum"
let anotherNameIs = myNameIs
anotherNameIs = "riteshhhhh"

console.log(myNameIs);
console.log(anotherNameIs);

//heap
let userOne = {
    email : "userone123@gmail.com" ,
    upi : "user@ybl"

}
let userTwo = userOne
userTwo.email = "usertow123@gmai.com"
console.log(userOne.email);
console.log(userTwo.email);




