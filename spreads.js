// let breakFast=["idli","vadai","dosai","pongal"]
// let lunch=["biriyani","fish curry","lemon rice"]


// let food={...breakFast,...lunch}

// console.log(food);

// let bf2=[...breakFast]

// console.log(breakFast);
// console.log(bf2);

//  let obj={
//     name: "thala",
//     alsoknownas :"msd",
//     role:"wk",
//     team:"csk",
// };

// let {team,...subObj}=obj;
// console.log(team);


// let so={
//     name: "shobana",
//     age:"21",
//     alsoknownas:"shobi",
//     job:"vip",


// };

// let merge={...obj,...so};
// console.log(merge);

// let obj1={
//     name:"vignesh",
//     email:"vignesh@gmail.com",
// };

// let obj2={
//     mobileno:12345678,
//     name:"sam",


// };
// let obj3={...obj1,...obj2};
// console.log(obj3);

// function abc(a,b,c,d){
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d)
// }

// abc(...breakFast);

let a=10;
let b=20;
let c=a;
c=40;

console.log(c);//value copy
console.log(a);

let obj ={
    name:"virat",
    age:38,
};

// let obj2=obj;//reference copy
// obj2.name="msd";

// console.log(obj2);
// console.log(obj);

let obj3={...obj};//shallow copy

obj3.name="msd";
console.log(obj3);
console.log(obj);