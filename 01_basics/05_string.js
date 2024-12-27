const name = "Ritesh "
const repoCount  = 20

// console.log(name + repoCount + " value");
console.log(`my name is ${name} and my repocount is ${repoCount}`);

const gameName  = new String('ritesh-sh-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('h'));

const newStrimg =gameName.substring(4,6)
console.log(newStrimg);

const anotherString = gameName.slice(-8 ,4)
console.log(anotherString);

const newString = "      helloji            "
 console.log(newString);
 console.log(newString.trim());


 const URL = "https://google.com/google%20india"
 console.log(URL.replace('%20' , '_'));
 console.log(URL.includes('danny'));
 
 
 console.log(gameName.split('-'));
 
 