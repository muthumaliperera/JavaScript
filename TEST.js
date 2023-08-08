 //variable
 let age; //let age equal to undefined
 console.log(age)

 let fname, lname = "Wasana Muthumali";

 console.log(fname);
 console.log(lname);
 console.log("Hello World!");

 //creating a constant
 const TEMP = 12.7, Name = "Muthumali";
 console.log(TEMP);
 console.log(Name);

 //literals

 let Goal = "This is an exercise";

 let reference = Goal;

 console.log(reference);

 const inf = Infinity;
 const ninf = Infinity; //not infinity
 const nan = NaN;//Not a aNumber, the value is taken as a space holder.

 let Do = true;
 let More = false;

 //symbol
 const blue = Symbol();
 const white = Symbol("Color White");

 blue === white //get false because symbols are unique

 //null and undefined
 
 let Myvalue;

 Myvalue = null;

 Myvalue = 100;

 Myvalue = undefined;

 console.log(Myvalue);

 //objects

 //object statement
 const obj1 = {};//we can add properties to this object, values can be primitive or object type

 obj1.age1 = 24//property with value
 console.log(obj1.age1);

 obj1.mark;//property with undefined value
 console.log(obj1.mark);

 const obj = {
     name2: "Wasana", //key = name, value = "Wasana"
     Age2:  23 //key = Age, value = 23
 };//object with properties

 console.log(obj.Age2);

 //deleting a property
 delete obj.Age2;

 console.log(obj.Age2);

 //create an array with different type of data
 const a1 = [1,2,3,4,5];
 const a2 = [1,2,3,null,'five'];
 const a3 = ['Hello', 'World', 'Array'];

 //an array containing an array
 const a4 = [
     [1,2,3],
     [4,5,6]
 ];

 //get array length
 console.log(a1[0]);

 //change array element
 a3[0]="Welcome";
 console.log(a3);

 //Date object
 //Display Date
 const now = new Date();

 console.log(now);

 const dt = new Date(2023,8,7,17,32);//17:32pm

 console.log(dt);
/** 
 //Maps and sets
 const roles = new Map();//create Map

 //assign role to the user
 roles.set(t1, 'user1');
 roles.set(t2, 'User2');

 //create set - set is a data collection where duplicate data are not allowed

 const role = new Set();//create set

 //specify set to user
 role.add('UserA');
 */

//STRING

let str = 'this is a sample text, "I love learning JS"';

let str1 = "today is a lovely day";

let str2 = '"today is tuesday", said john';

console.log(str);
console.log(str2);
console.log(str1);

//STRING CONCATENATION

let temp2 = 31.5;
let str3 = "Weather of Sri Lanka is " + temp2 + "\u00b0c";

console.log(str3);

//multiline string

let str4 = 'line1 \n line2';

console.log(str4);

//If & Else
/*if control statement
if(expression)
    statement1; //statement execute when if expression = true
else
    statement2; //statement execute when if expression = false */


let time1 = 9;

if(time1<12){
 console.log("Good morning");
 if(time1 == 9){
    console.log("Time to take breakfast")
 }
}else if(time1 <15){
 console.log("Good afternoon");
}
else{
    console.log("Good evening");
   }

//SWITCH
/*
switch(expression){
    case value1:
    //executed when the result of the value matches value1
    break;
    case value2:
    //executed when the result of the value matches value2
    break;
    case value3:
    //executed when the result of the value matches value3
    break;
    default:
    //executed when none of the value matches to expression
    break;
}*/

/**
 * For example
 * which language do you choose?
 * 1.JavaScript     2.Python
 * 3.PHP            4.Asp.net
 */

let ans =1;//this is the selected answer

switch(ans){
    case 1:
    console.log("You have selected javaScript");
    break;
    case 2:
        console.log("You have selected Python");
    break;
    case 3:
        console.log("You have selected PHP");
    break;
    case 4:
        console.log("You have selected Asp.net");
    break;
    default:
        console.log("Invalid answer");
    break;
}

//loops

//while loop
/*while (expression){
    statement1;
    statement2;
    statement3;
}*/

let count =0;
while(count <10){
    console.log(count);//print count variable value on console
    count++;//increase count variable value by1
    //count = count +1 //both statements are equal
}

//do while loop
/**
 * do{
 * statement1;
 * statement2;
 * }while(expression);
 */

/**
 * do block executed at least once so you will get count 0 on console
 * then while evaluate expression
 * count means
 * (0<0) return false loop terminated
 * and you will get count
 */
let count1 = 0;
do{//execute this block at once
    console.log("Count Value" + count1);//print count variavle value on console
    count++;//increase count variable value by 1
}while(count<5);//evaluate expression

//FOR loop
/**
 * for(initialization;expression, increment/decrement)
 *      statement;
 */

for(let count2=0; count2<5; count2++)
    console.log("Number: "+count2);
/**
 * Execution Pattern
 * 1.Initialize variable and specify value
 * 2.Evaluate Expression
 * 3.Execute Statement
 * 4.Execute Increment and Decrement Operators
 */

//multiple variables
for(let i=0,j=5;i<5;i++,j--){
    console.log(i+" and "+j)
}

//Nested for loop
for(let i=1;i<4;i++){
    for(k=1;k<4;k++){
        console.log(i+","+k)
    }
    console.log("\n");
}

//For/in loop

/**
 * for(variable in object)
 *  statement
 */

const obj2 = {a:1, b:2, c:3, d:4};

for(let o in obj2){
    console.log(obj2[o]);//print object properties values on the console using keys
   // console.log(o)//print key
   // console.log(o+":"+obj2[o]);//print object with keys and values
}

//For/of loop

/**
 * for(variable of object)
 * statement;
 */

//declare array
let ary =[1,2,3,4,5];

let ary2="wasana";
//set for..of loop
for(let value of ary2){
    console.log(value);//print array index number on the console
}


/**
 * Difference between for..in & for..of 
 * 
 * for..in - loop over enumerable properties
 * for..of - does use iterable objects and loop over generated values
 */
