// let myDate =new Date();

// console.log(myDate.toDateString())  //gives date with day as a result

// console.log(myDate.toISOString()) // gives date with time 

// console.log(myDate.toLocaleDateString());  //gives date in slash form

// console.log(typeof myDate);  // object

// console.log(myDate.toJSON()) // gives date with time in hiffen 


// let myCreatedDate =new Date(2023,0,23) //year month date 
// year startes from 0 index in date in js 

// console.log(myCreatedDate.toDateString());

// let myCreatedddDate =new Date(2023,0,23,5,6)
// console.log(myCreatedddDate.toLocaleString()); 

let myCreatedddDate =new Date("01-14-2023")
console.log(myCreatedddDate.toLocaleString());



let myTimeStamp = Date.now()
console.log(myTimeStamp); //used when we have to analyse the time in mcq or poll etc to see how has done fast and all that stuff

// console.log(myCreatedddDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
//console.log(newDate);

newDate.toLocaleString('default',{
    weekday:"long",
})

 



