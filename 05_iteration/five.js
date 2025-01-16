const lang = ["js","cpp", "python", "ruby","java"]
// lang.forEach(function(val)
// {
//     console.log(val);
    
// })
// lang.forEach((val) =>{
// console.log(val);

// })
// function printMe(val){
//     console.log(val);
    
// }
// lang.forEach(printMe)

// lang.forEach((item , index , arr) =>{
// console.log(item , index ,arr);

// })

const myCode = [
    {
        langName : "java",
        fileName : " java"
    },
    {
        langName : "java script",
        fileName : "js"
    },
    {
        langName : "python",
        fileName :"py"
    },
    {
        langName : "Ruby",
        fileName :"rb"
    }
]
myCode.forEach((val)=>{
    console.log(val.fileName);
})