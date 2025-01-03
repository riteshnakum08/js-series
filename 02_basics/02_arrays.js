const marvel_heros = ["thor", "ironmen" ,"spiderman"]
const dcHeros = [" superman","flash" ,"batman"]
 
//marvel_heros.push(dcHeros)
// console.log(marvel_heros);

// console.log(marvel_heros + dcHeros);
// const newVar = marvel_heros.concat(dcHeros)
// console.log(newVar);

const newHeros = [...marvel_heros , ...dcHeros]//spread operators
// console.log(newHeros);

const newArr = [1,2,[3,4,5],6,[5,4,33,[43,2,45]]]
const newArr2 = newArr.flat(Infinity)
console.log(newArr2);
