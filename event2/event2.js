let btn=document.querySelector(".btn")
console.log(btn)
btn.addEventListener("click",()=>{
   alert("i am eventlistener")
})

let header=document.querySelector("header")
header.addEventListener("mouseover",()=>{
    header.style.background="black"
    header.style.color="white"

})

header.addEventListener("mouseleave",()=>{
    header.style.background="antiquewhite"
    header.style.color="black"


})

let a1=()=>{
    console.log("i am a1 function")

}
 let a2=()=>{
    console.log("i am a2 function")
 }

 let btn3=document.querySelector(".btn3")
 btn3.addEventListener("click",()=>{
    console.log("i am click event2");
    console.log(e)
 })

//  keyboard events

let input=document.querySelector("inpt1")

input.addEventListener("keydown",()=>{
    console.log("key is pressed")
})

input.addEventListener("keyup",(e)=>{
    console.log("key is up")

    console.log(e.target.value)


let output=document.querySelector(".output")

    output.innerHTML=`<h2>${e.target.value}</h2>`

})

