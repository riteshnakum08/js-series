const instaUser ={}


instaUser.id ="123rit"
instaUser.name ="danny"
instaUser.isLoggedin = false

// console.log(instaUser);

const user ={
    email :"abc.gmail.com",
    fullName:{
            userFullName :{
                firstName:"ritesh",
                secondName:"nakum"
            }
    }
}
//console.log(user.fullName);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj4 = {5:"E",6:"F"}

// const obj3 ={obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1 , obj2 ,obj4)
const obj3 ={...obj1 , ...obj2 , ...obj4}//spread operator
// console.log(obj3);


const user1 =[
    {
        id:1,
        email:"rn001@gmail.com"
    },
    {
        id:1,
        email:"rn001@gmail.com"
    },
    {
        id:1,
        email:"rn001@gmail.com"
    }
]
user1[1].email
// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty('isLoggedin'));

const course = {
    courseName : "js tutorial",
    priceRanbge:"999",
    teacher:"ritesh"
}
const{teacher:instructer} = course
console.log(instructer);

