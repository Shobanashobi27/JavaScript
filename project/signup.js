let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let sname=document.getElementById("sname").value
    let email=document.getElementById("email").value
    let pass=document.getElementById("pass").value
    // store in localstorage                                                                                                                                                                                                

    localStorage.setItem("sname",sname)
    localStorage.setItem("email",email)
    localStorage.setItem("pass",pass)
    console.log({sname,email,pass})

    alert("Signup done")

    open("./signup.html")

    

})

//! localstorage

localStorage.setItem("actorname","vijay")
console.log(localStorage.getItem("actorname"));