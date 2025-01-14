//For OF 

const arr = [1,2,3,4,5,6]

for (const dig of arr) {
    // console.log(dig);
    
}

const greetings = "hello ji!"
for (const greet of greetings) {
    // console.log(greet);
    
}

//Maps

// const map = new Map()
// map.set('IN' , "india")
// map.set('USA' , "united states of America")
// map.set('UK' , "united kingdom")
// map.set('JAP' , "Japan")


// console.log(map);
// for (const [key , value] of map) {
//     // console.log(key , ':-' , value);
    
// }

const myObj = {
    'game1' : 'PUBG',
    'game2' : 'Free Fire' 
}
// for (const part of myObj) {
//     console.log(part);
    
// }
const map = new Map()
map.set('IN' , "india")
map.set('USA' , "united states of America")
map.set('UK' , "united kingdom")
map.set('JAP' , "Japan")

for (const key in map) {
    console.log(key);
    
}