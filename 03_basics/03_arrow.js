const user = {
    userName: "danny",
    price :999 ,
    welcomesg :function(){
        console.log(`${this.userName} , welcome to website`);
       console.log(this);
        
    }
}
// user.welcomesg()
// user.userName = "sunny"
// user.welcomesg()
// console.log(this);

// function blank(){
//     console.log(this);
    
// }
// blank()

// const blank = function(){
//     console.log(this);
    
// }
// blank()
// const blank =()=>{ //arrow function
// userName: "danny"
// console.log(this.userName);

// }
// blank()


// const addTwo = (num1 , num2) =>{
// return num1 + num2
// }
// console.log(addTwo(4,2));


//const addTwo = (num1 , num2) =>  num1 + num2 //implisit return
// const addTwo = (num1 , num2) => ( num1 + num2)
const addTwo = (num1 , num2) => ({userName:"happy"})//object return
    console.log(addTwo(4,2));
    