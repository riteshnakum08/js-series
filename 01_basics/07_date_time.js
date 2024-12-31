//Dates
let myDate = new Date()
//console.log(myDate.toString());//it will show todays date with time Mon Dec 30 2024 13:33:08 GMT+0000

//console.log(myDate.toDateString());//it will show todays date without time Mon Dec 30 2024

//console.log(myDate.toISOString());//2024-12-30T13:34:17.004Z

//console.log(myDate.toJSON());//2024-12-30T13:35:48.478Z

//console.log(myDate.toLocaleDateString());//12/30/2024

//console.log(myDate.toLocaleTimeString());//1:38:05 PM

//console.log(typeof myDate); //object

//let createdDate = new Date(2023 , 0 ,23)
//console.log(createdDate.toDateString()); //Mon Jan 23 2023

// let createdDated = new Date(2023 , 0 ,23 ,4 ,3)
//console.log(createdDated.toLocaleString());//1/23/2023, 4:03:00 AM

let createdDated = new Date("2023-01-14")
// console.log(createdDated.toLocaleString());//1/14/2023, 12:00:00 AM

//---------------------------------TIME------------------------------------------
let mytime = Date.now()
// console.log(mytime);
// console.log(createdDated.getTime());

//console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
//console.log(newdate);//2024-12-30T14:19:22.825Z//write.get and got multiple options
console.log(newdate.toLocaleString('default',{
    weekday:"long"
    })
    );

