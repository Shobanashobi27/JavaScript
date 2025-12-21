// get method
let cont=document.querySelector("div");

async function abc() {
    let res= await fetch(" https://api.escuelajs.co/api/v1/users");
    let data= await res.json();
    console.log(data);


    data.forEach((e) => {
        let image=document.createElement("img");
        image.src=e.avatar;

        let heading3=document.createElement("h3");
        heading3.innerText=`Name:${e.name}`;

        let emailheading=document.createElement("h3");
        emailheading.innerText=e.email;

        let parentDiv=document.createElement("div");

        parentDiv.append(image,heading3,emailheading);
        cont.append(parentDiv);

        
        
    });
}
abc();

let btn=document.querySelector("button");

let oneuser={
    name:"shob",
    email:"shobi@gmail.com",
    password:12345,
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc__57_ewQPmvvwoNY7uDrLZvwe2YdSHEYHg&s",
};

btn.addEventListener("click",async()=>{
    let res=await fetch(" https://api.escuelajs.co/api/v1/users",{
    method:"POST",
    headers:{
        "content Type":"application/json",
    },
    body:JSON.stringify(oneuser),
    });

    let data =await res.json();
    console.log(data);

},false);