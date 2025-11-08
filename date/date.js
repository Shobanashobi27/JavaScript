 let time=new Date()
 console.log(time)

 console.log("now hour is",time.getHours())

 console.log("now mintues is",time.getMinutes())

 console.log("now seconds is",time.getSeconds())

 console.log("today date is",time.getDate())

 console.log("today year is",time.getFullYear())

 console.log("today day is",time.getDay())

 let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

 let dayIndex=time.getDay()

 console.log(days[dayIndex])

 console.log("month is ", time.getMonth()+1)


 const months = ["January", "February", "March", "April", "May", "June", "July",  "August",  "September", "October", "November", "December"];

 console.log(months[time.getMonth()])

 console.log(time.toLocaleTimeString())
 console.log(time.toLocaleDateString())

   let displayTime=()=>{
    let d=new Date()
    console.log(d.toLocaleTimeString())

    let output=document.querySelector(".output")
    output.innerHTML=`<h2> ${d.toLocaleTimeString()}</h2>`
   }

   displayTime()


   setInterval(displayTime,1000)

//    /math object

console.log(Math.sqrt(16))
console.log(Math.abs(-50))

console.log(Math.max(6,8))
console.log(Math.min(6,8))

console.log(Math.ceil(5.8))
console.log(Math.ceil(6.1))

console.log(Math.floor(5.3)) //5
console.log(Math.floor(5.9999)) //5

console.log(Math.round(7.4)) //7
console.log(Math.round(7.6)) //8

console.log(Math.floor(Math.random()*10))