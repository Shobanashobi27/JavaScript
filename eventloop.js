console.log("hii");

let mypromise=new Promise((res,rej)=>{
    res.apply("vanakam")
})
mypromise.then((e)=>{
    console.log(e);
})

setTimeout(()=>{
    console.log("hello");


},1000)
// for(let i=0;i<=1000;i++){
// console.log("hello");
// }
 console.log("bye");