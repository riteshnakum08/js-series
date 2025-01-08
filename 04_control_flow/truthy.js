const userMail = []
// if (userMail) {
//     console.log("mail available");
    
// }
// else{
//     console.log("dont have mail");
    
// }
// if (userMail.length === 0) {
//     console.log("array is empty");
    
// }
const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("object is empty");
// }

//falsy values
 // false , 0 , -0 , BigInt 0n , "" -> empty string , null , undefined ,NaN

// truthy values
//"0" ,  'false' ," " ->string with spaces , []->empty array ,{}_>empty object,
//function(){}


//Nullish coalescing Operator (??): Null , Undefined
let val1;
// val1 =  5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 18
val1 = null ?? 10 ?? 20
console.log(val1);



//terniary operator
 //condition ? true : false

 const price = 200
 price <= 100 ? console.log("lesss than 200") : console.log("greater than 200")
 
 