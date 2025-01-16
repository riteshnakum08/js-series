// const lang = ["js","cpp", "python", "ruby","java"]

//  const values = lang.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);


const  myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter((num) =>{ 
//     return num >5} )
// const newNum =[]
// myNums.forEach((num)=>{
//     if (num > 7) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);



const books = [
    {title:'book one' , genre :'fiction' ,publish: 1981 ,edition: 2001  },
    {title:'book two' , genre :'non-fiction' ,publish: 1983 ,edition: 2011  },
    {title:'book three' , genre :'drama' ,publish: 1984 ,edition:2010  },
    {title:'book four' , genre :'fiction' ,publish: 1982 ,edition: 2021  },
    {title:'book five' , genre :'non-fiction' ,publish: 1981 ,edition: 2001  },
    {title:'book six' , genre :'history' ,publish: 1981 ,edition: 2011  },
    {title:'book seven' , genre :'dram' ,publish: 1987 ,edition: 2025  },
    {title:'book eight' , genre :'fiction' ,publish: 1996 ,edition: 2016  },
    {title:'book nine' , genre :'history' ,publish: 1961 ,edition: 2007  },
    {title:'book ten' , genre :'non-fiction' ,publish: 1999 ,edition: 2010  }
];
//const userBooks = books.filter((bk) => bk.genre === 'history')
const userBooks = books.filter((bk) =>{
   return bk.edition > 2000 && bk.genre ==="fiction"})
console.log(userBooks);
