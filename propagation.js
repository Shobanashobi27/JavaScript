// let htmlHeader=document.getElementsByTagName("h1");
// let queryHeader=document.querySelectorAll("h1");

// let div=document.querySelector("div")

// console.log(htmlHeader,queryHeader);

// document.createElement("h1")

// let newh1=document.createElement("h1");

// newh1.innerHTML="I am Fourth"

// div.append(newh1)



// console.log(htmlHeader);
// console.log(queryHeader);


// let parentElement=document.getElementById("parent")
// let childElement=document.querySelector("#child");

// let btnEle=document.querySelector("button")

// console.log(parentElement,childElement,btnEle);

// btnEle.addEventListener(
//     "click",
//     (event)=>{
//         event.stopPropagation();
//     console.log("button is clicked");
//     }
    
// );

// childElement.addEventListener(
//     "click",
//     (event)=>{
//         event.stopPropagation();
//    console.log("Child div is Clicked");
//     }
   
// );

// parentElement.addEventListener("click",(event)=>{
//    console.log("Parent div is Clicked");},
//    true
   
// )

function abc(){
 console.log(" i will be executrd from html");
}

let btn= document.querySelector("button");

btn.onclick=abc;