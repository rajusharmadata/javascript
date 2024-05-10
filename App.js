// javascript literals

// creat a object and methoad Applie 
let post={
    username:"raju",
    content:"This is my first post ",
    like:150,
    reposts:5,
    tags:["raju","rajan","Niraj"]
}
// first method how to acess my key 
//  console.log(post.username);
//  console.log(post["tags"]);
// key-basicale key is my porperty my objet
// what is object- object is store my data 
// and key is - data name Kon kon so data use me store hai 
// let porp="reposts";
// console.log(post[porp]);
// console.log(post.porp);

// Phase 2

const obj = {
    1 : "a",
    2 : "b",
    true: "c",
    null: "d",
    undefined:"e"
};
// basicaliy 1 kon phale string me convert kar raha hai usek baad acees kar raha hai key value ko;

// console.log(obj[1]);
// console.log(obj[1]);
// console.log(obj[true]);
// console.log(obj[null]);
// console.log(obj[undefined]);

// ager ham  (obj.key ) use kare ge to 1 ek constan  key hai to hame error dekhno ko milega 
// console.log(obj.1);

// console.log("-------------------")
// console.log(obj.null);
// console.log(obj.true);
// console.log(obj.undefined);
// yaha par obj.null kiye to null ek string key hai to ise ham dot se access kar sakte hai 


// pahes-3

// how to chage the object literals and literals
const student = {
    name:"Raju",
    age:19,
    city :"Aurangabad",
    marks:72
};
// change a kay valu 
// console.log(student.name);
// console.log(student.name = "Ranjan sharma")
// console.log("--------------------------");
// console.log(student.name);
// add a new porperty in  a object (student)
// student.village = "parasdih";
// console.log(student);

// Hame uske object ke name and uske kay se change kar sakte hai
//  and us object me naya porperty add kare sakte hai

// How To delete the property in object ;
// delete object.key 
// delete student.age;
// console.log(student);
// delete student.name;
// console.log(student);


// phase -3

// object of object (nesting of object)
// Exampale 
let studetInfo ={
    Aman:{
        grate:"A+",
        city:"Delhi"
    },
    Raju:{
        grate:"A",
        city:"Aurangabad"
    },
    Nirj:{
        grate:"B",
        city:"New Delhi"
    }
};

// console.log(studetInfo);
// // How to acess of objet to objet
// console.log(studetInfo.Aman);
// // How to acess the object to object key 
// console.log(studetInfo.Aman.city);
// // How to change the key value

// console.log(studetInfo.Aman.city = "Aurangabad");
// // How to add the new key 
// console.log(studetInfo.Aman.work = "Techar");


// phase-4

// Array  of objects
// storing information of multiple students

// Example
const classInforaju =[
{
    name:"Raju",
    grade:"A+" ,
    city:"Aurangbad"
},
{
    name:"Aman",
    grade:"A",
    city:"Delhi"
},
{
    name:"Ranjan",
    grate:"B ",
    city:"Merruth"
}
];

// console.log(classInforaju);
// //How to acess the array of object 
// console.log(classInforaju[0].name);
// // How to change the value of Array in object
// console.log(classInforaju[0].city= "Bangluru");
// // How to Add the new key in object
// console.log(classInforaju[0].gender="male");
// console.log("---------------------------------------------");
// console.log(classInforaju[0]);

// phase -5
// How to generate a new number(0 to 1 but not 1; less than 1;)

// Math.random function using
// console.log(Math.random());
 
// How to generate a rendom number (1 to 10)

// step 1
// let num = Math.random();
// // step2
// num = num*10;
// // step 3
//  num = Math.floor(num);
// // step 4
// num = num+1;
// console.log(num);

// short form of Method
let ans =  Math.floor(Math.random()*10)+1;
console.log(ans);
// How to generat a four digeat OTP;

let four =  Math.floor(Math.random()*1000)+1000;
console.log(four);
