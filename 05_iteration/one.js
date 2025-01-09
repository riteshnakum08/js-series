//for
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("its number five:5");
        
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
    
//  for (let j= 0; j<= 10; j++) {
//    console.log(i + '*' + j + '=' + i*j);
   
    
    
//  }
// }
let myArr =["white" , "blue" , "pink" , "yello" , "red"]
for (let index = 0; index < myArr.length; index++) {
  const element =myArr[index];
  // console.log(element);
  
}

//Break and Continue

for (let index = 1; index < 20; index++) {
  if (index  == 5) {
    //console.log("five  fonded");
    
    break
  }
//  console.log(index);
}



for (let index = 1; index < 20; index++) {
  if (index  == 5) {
    console.log("five  fonded");
    continue
  }
 console.log(index);
 
  
}