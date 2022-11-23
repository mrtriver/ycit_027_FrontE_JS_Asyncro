// let x = 121;
// let xArr = Array.from(x);
// console.log(xArr);


// var myInt = 235345;
 
// // Getting the string as a parameter
// // and typecasting it into an integer
// let myFunc = num => Number(num);
 
// var intArr = Array.from(String(myInt), myFunc);
 
// // Print the result array
// console.log(intArr);

const myNum =1121;

function myFunc(num){

    let myNumStr = num.toString().split("");

    if (myNumStr.length < 0  ) {
        return false;
    }       
    for(let i = 0; i < myNumStr.length; i++){
        for (let j = myNumStr.length - 1; j >= 0; j--){
            if (myNumStr[j] == myNumStr[i]){
  
            }
        }
    }
} 

console.log(myFunc(myNum));











