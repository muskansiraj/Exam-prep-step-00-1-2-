// step  00

let message = "Hello world";// implict types //take your cursor on the variable name ..implicit
console.log(message);

//example of strong typing //   adding data types like string,boolean,number and others,,,,,,

let message2:string="Hello world";
console.log(message2);

//  step 00(a)

//Json stands for javascript object  notation
//Json is a  text based data format that is used to  store and transfer data
//Json syntax
//{
//"name":"kabeer",
//age : 22,
//}
//step 00 b  syntax error

//lett message = "hello world";
// console.log(messages);    // ( wrong syntax )

// step 00 c
// type error
 // let message = "hello world";
 // console.loger = "message"  // typing mistake (typing error)

 //step 00 d

 // assignbility error

 //let message = "hello world";
 //let message = 6           // data types changes in variable like string replace with number .....error...
 //.string replace with string ....its working
 // console.log = (message);

 //'''''''''''''STEP 01 (A)

//Strongly typed syntax
// strongly types me types ko define karte heinn

console.log ("Step 1");
let a : string = "pakistan";
a = "USA";
let b : 2
let c : boolean = true     //explicit means explanation strong typing ko explicit b kaha jata he


// type inferences  // 2nd name implicit means ki chiz define na ki jarhi ho

// type inference me khd hi type maloom krlete he direct hota he 

let e = "USA";
let f = 12.6;
f = 22;
let g = false ;
g = true;    // type nhi dete type inference //

//'''''''''''''STEP 2 .........//


console.log ("step 2");


//   LET  CONST AND VARIABLE
let j = 9;
const m = 10;
var n = 11
if (true){ // block scope curly bracket k ander utilize hota he hum ise bahar console krwynge to error dega  
    let j= 9
    const m = 10

var n = 11
}
console.log(j)  //  ye humne block scope ko bahar console krwaya he to j me error araha he example of block scope

console.log (n)


// let num = 3 
///num = 4
// num = 5  only type changes error
//   example 

//      let num = 10
    //  num = 12
    // num = 67    not error
    // num = false error










