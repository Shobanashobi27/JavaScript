console.log("timing function in js")

console.log("start")

let display=()=>{
    console.log("Iam display function")
}
// display()

// setTimeout()

setTimeout(display,4000)

console.log("end")

setTimeout(()=>{
    console.log("i am setTimeout")
},5000)

// let wish=()=>{
    // console.log("happiee bday my everthing🩵🌍🖤")
// }
// setTimeout(wish,3000)

// let sorry=()=>{
    // console.log("sorryyyyyyyyyyy🥲😑")
// }
// setInterval(sorry,1000)

let st=setTimeout(() => {
    console.log("i am settimeout")
    
}, 3000);

clearTimeout(st)

let si=setInterval(() => {
     console.log("i am setinterval")
    
}, 1000);
clearInterval(si)