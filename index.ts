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
// let userTuple:[number,string,string,number,string]=[
//     1,
//     "John",
//     'john@gmail.com',
//     30,
//     "Password3",
// ];

// console.log(userTuple);

// // users:

// let users:[number,string,string,number,string][]=[
//     [1,"John",'john@gmail.com',30,"Password3"],
//     [2,"John",'john@gmail.com',30,"Password3"],
//     [3,"John",'john@gmail.com',30,"Password3"],
//     [4,"John",'john@gmail.com',30,"Password3"],
//     [5,"John",'john@gmail.com',30,"Password3"],
// ];
//console.log(users);

//* object
// let product:{
//     _id:number;
//     name:string;
//     description:string;
//     price:number;
// } = {
//     _id:12,
//     name:"product",
//     description:"product",
//     price:59,
// }
// console.log(product)

// let product2 : {
//     _id:number;
//     name:string;
//     description:string;
//     price:number;
// } = {
//     _id:2,
//     name:"babab",
//     description:"good",
//     price:56,
// }

//! type alias

type Tproduct={
    readonly _id:number;
    name:string;
    description?:string;
    price:number;
}
let product:Tproduct
 = {
    _id:12,
    name:"product",
    description:"product",
    price:59,
}
console.log(product)

let product2 : Tproduct = {
    _id:2,
    name:"babab",
    //description:"good",
    price:56,
}
product.name="";
//product._id=23


//* union
type ID = number| string | boolean
let id:ID =1;
id="";
id=true;



type TU={name:string; email:string;};

let userArr:TU[]=[{email:"ohn@gmail.com",name:"Ohn"},{email:"",name:""}]

type IDN=number|string;
let idn:IDN=1;
idn="";


//* intersection

type A={a:string;};

type B={b:string;};

let aOb:A={
    a:""
};

//type C = A& B;

type C= A& {
    c:string;
};

let cObj:C= {
    a:"",
    c:"",
};

//let cObj=A&B={
//a:"",
//b:"",};

let dObj: A|B ={
    a:"",
    b:"",
};



//! type literal

type Tstatus = "error"|"success"|"fail"|"something";

let responseStatus:Tstatus="error";
responseStatus="success";
responseStatus="something";
responseStatus="fail";


type TGreet=(x:string|number)=>void;
//! function
const greet :TGreet=(name)=> {
    console.log("hello ", name);
};
// const greet = (name:string|number):void=> {
//     console.log("hello ", name);
// };



greet("john");
greet(123);


const add= (x:number,y:number):number => {
    return x+y;
}


//! interface

interface Iuser{
    readonly _id:string|number;
    name:string;
    email:string;
    password:string;
    phone?:string;
}

interface IUser2 extends Iuser{
    age:number;
}
let user:IUser2={
    _id:"1",
    name:"",
    email:"",
    phone:"",
    password:"",
    age:56,
}


//! generic

interface Ibox<T> {
    value : T;
}

let stringBox:Ibox<string>={
    value:"box",
}

let numberBox:Ibox<number>={
    value: 12 ,
}

let Box: Ibox<{x:number;y:string}>={
    value:{
        x:12,
        y:"sddd",
    },
};

let Box1: Ibox<{x:number;y:string}>={

    value:{
        x:12,
        y:"23",
}
}

let Box3:Ibox<(x:number) =>number>=  {
value:(a:number)=>{
    return a;
},
};

let Box2:Ibox<number[]>={
    value:[1,2]
};
