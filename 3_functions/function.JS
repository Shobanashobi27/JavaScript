
//how to create function
function display()
{
    console.log("i am display function")
}

display()

//function with parameter
function add(a,b)
{
    console.log(a+b)
}
add(5,5)
add(6,10)

//function with return keyword

function sub(a,b)
{
    return  a-b;

}
let res=sub(90,40)
console.log(res)

//function with expression


let msg=function(){
    console.log("hello everyone...")
}
msg()

//arrow function
let multiply=(a,b)=>
{
    console.log(a*b)
}

multiply(30,3)

//nested function

let outer=()=>{
    console.log("Iam outer function")

    let inner=()=>{
        console.log("Iam inner function")
    }
    inner()
}
outer()
//lexical scopping  ******

//in nested function inner function can access all the properties of outer function 
// but outer function cannot acccess the  properties of inner function,this is called lexical scopping.
let parent=()=>{
    let a=10
    let child=()=>{
        let b=20
        console.log(a)
        console.log(b)
    }
    child()
    //console.log(b) 
}
parent()


//Higher order function and callback function ******

// any function that takes another function as parameter 
// the function we are sending as a parameter to the higherorder function is called callback function.
let hof =(a)=>{
    a()
    
}
hof(()=>{
    console.log("Higher order and callback function")
});

// IIFE  (immediate Invoke Function Expression )


(function()
{
    console.log("hello")
})()
