//* variable declaration methods
//? var, let , const

//* datatypes
//? string
let a:string;
//? number
let b: number;
//? boolean
let c:boolean;
//? null
let d:null;
//? undefined
let e:undefined;

//* special tyypes
//? any
let f:any;
f="any type";
// f=12;
console.log(f.toUpperCase());

//? unknown
let g: unknown;
g="unknown tyype";
// g=156;
if (typeof g === "string"){
console.log(g.toUpperCase());
}
//? void

//? never

//! type inference

// let a = 12;
//a=''


//! type annotation
// let b:string;
// b=''
// b=12;

//*array
let numbers:number[] = [12,55,66];
//numbers.push("1");
numbers.push(5); 
console.log(numbers);

//* tuple
// id, name, email, age, password => [id, name, email, age , password]
let userTuple:[number,string,string,number,string]=[
    1,
    "John",
    'john@gmail.com',
    30,
    "Password3",
];

console.log(userTuple);

// users:

let users:[number,string,string,number,string][]=[
    [1,"John",'john@gmail.com',30,"Password3"],
    [2,"John",'john@gmail.com',30,"Password3"],
    [3,"John",'john@gmail.com',30,"Password3"],
    [4,"John",'john@gmail.com',30,"Password3"],
    [5,"John",'john@gmail.com',30,"Password3"],
];
console.log(users);