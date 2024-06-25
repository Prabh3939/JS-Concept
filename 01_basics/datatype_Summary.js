//primitive 

//7 types: String, numbers, boolean, null,undefined, symbol, bigInt-- to handle some big values or scientific value 

//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// const id =Symbol('123')
// const anotherId =Symbol('123')

//console.log(id===anotherId);  //false as Symbol datatype work here and difrentiate the bothe same input and given the false as the output 


//Reference (Non Primitive)

// Array , Objects, functions 

// const hero= [shaktiman,ironman, doga]
// console.log(hero);
//   ///array

// let myObj ={
//     name:prabh,         //object
//     age:20,
// }
// console.log(myObj);

// const myFunction =function(){
//     console.log("hello world");
// }
//***********************************************************
// stack(primitive )  heap (non primitive)
let myyoutubename= "code with prabh"
anothername ="code"

console.log (myyoutubename)
console.log(anothername);

let userone={
  email:"prs2121@abc.com",
  upi :"user@ybl"
}

let usertwo =userone

usertwo.email="prs000@abc.com"
console.log(userone.email);
console.log(usertwo.email);
