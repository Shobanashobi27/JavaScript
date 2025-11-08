
// promise is one javascript object,used to handle asynchronized  operation.
//  we can create promise by using new keyword.
// it will take one callback function there it will take two parameters (resolve,reject)
// for handling the resolve we need .then() block and for  handling the reject we need .catch() block.
// promise having 3 states (pending,fulfilled,rejected)


let p=new Promise((resolve,reject)=>{
let studied=true
if(studied)
{
    resolve("i will give mock on 15th sept")

}
else{
    reject("i will not give bcuz i am not prepared")
}
})
console.log(p)

p
.then((data)=>{

    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(
    console.log("i am finally block")
)

let p1=new Promise((res,rej)=>{


})
p1.then((d)=>{
    console.log(d)
})
.catch((e)=>{
    console.log(e)
})
.finally(
    console.log("i am finally block")
)


