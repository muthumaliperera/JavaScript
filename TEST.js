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