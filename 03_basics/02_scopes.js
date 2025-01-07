let a = 10
const b = 20
var c = 30

//{} = scope



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "danny"
    function two(){
        const website = " youtube"
        console.log(username);
        
     }
    // console.log(website);
   two()
}
one()

if (true) {
    const username = "danny"
    if (username === "danny") {
        const website ="youtube"
        console.log(username + website);
         
    }
    // console.log(website);
    
}
// console.log(username);

//_________________________________________________________________________________________________________________

function addOne(num){ //first way to declare function
    return(num + 1)
}
addOne(5)

const addTwo = function(num){ //second way to declare function
    return(num + 1)
}
addTwo(5)