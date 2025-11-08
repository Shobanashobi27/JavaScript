let display=(data)=>{
    // console.log("i am display function")
    console.log(data)
    let main=document.querySelector("main")
    data.map((ele)=>{
        console.log(ele)

        let div=document.createElement("div")
        div.classList.add("card")

        div.innerHTML=<img src=${ ele.image } > <h4> title is ${ele.title}</h4> <h4>price is:${ele.price}rs</h4> <h4>rating is: ${ele.rate}</h4>

        main.append(div)

    })
    
}

let getData =async()=>{
    try{

    
    let res =await fetch("https://fakestoreapi.com/products");
    let data=await res.json()

    // console.log(data)

    display(data)
}
catch(err)
{
    console.log(err)
}
}
display()
display()