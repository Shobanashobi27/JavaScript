let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let lemail=document.getElementById("lemail").value
    
    let lpass=document.getElementById("lpass".value)

    console.log({lemail,lpass})

    //  take the data from the localstorage

    let semail=localStorage.getItem("semail")

    let spass=localStorage.getItem("spass")
    console.log({semail,spass})

    if(semail==lemail&&spass==lpass)
    {
        alert("login done successfully")
        open("./home.html")
    }
    else{
        alert("wrong credentials")
    }

   

})
