// let obj={
//     name:"shob",
//     age:21,
//     name:"sam",
// };

// let obj2={...obj,email:"shob@gmail.com"};// spread operator
// console.log(obj2);

// let allinput=document.querySelector("input");
// console.log(allinput.name);

// let a="mobile";
// let obj={
//     name:"dhoni",
//     age:43,
//     a:1234567890,
// };

// console.log(obj);



let allinput=document.querySelectorAll("input");
let form=document.querySelector("form")

let obj={
   name:"",
   email:"",
   password:"",
   avatar:""
}

// let obj={
//     name:"shobana",
//     age:21,
    
// }
// let a="email"

// let obj2={...obj,a:"shob@gmail"}
// console.log(obj2);


 allinput.forEach((input)=>{
//  input.addEventListener("input",(event)=>{
//    obj={...obj,[event.target.name]:event.target.value}

input.addEventListener("input",(event)=>{

})
   console.log(obj);

   // console.log(event.target.name);
 
});

form.addEventListener("submit",async(event)=>{
   event.preventDefault()

  let res=fetch(" https://api.escuelajs.co/api/v1/users",{method:"POST",headers:{
   "content-type":"application/json"
  },
  body:JSON.stringify(obj)
});

let data=(await res).json()
console.log(data);



   // console.log("form has been submitted");


});