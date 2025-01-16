//reduce method
const myNums = [1, 2, 3, 4]

// const total = myNums.reduce(function (acc ,currnt) {
//     console.log(`acc: ${acc} and currnt  value is:${currnt}`);
    
//     return acc + currnt  
// } , 0)
// const total = myNums.reduce((acc , currnt)=> acc + currnt, 0)
// console.log(total);


const shoppingCart = [
    {
        item: "course1" ,
        price : 990
    },
    
    {
        item: "course2" ,
        price: 930
    },
    {
        item: "course3" ,
        price: 1090
    },
    {
        item: "course4" ,
        price: 2200
    }
]
const total  = shoppingCart.reduce((acc, item) => acc + item.price ,  0)
console.log(total);
