let inputCity=document.querySelector("input")
let searchBtn=document.querySelector("button")
 let outputDiv=document.querySelector("#output")


 searchBtn.addEventListener("click",async()=>{
    outputDiv.innerHTML=""
    let apikey="a2c012df45b2cba0a8fbdd4947b2ed27"
 let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apikey}`)
  let  data=await res.json()
  console.log(data);

  if(res.status===200){
    let cityName=document.createElement("h3")
    cityName.innerHTML=`city name:${data.name}`

    let temperature=document.createElement("h3")
    temperature.innerHTML=`temperature:${parseInt(data.main.temp-273)}℃`
    
    let climate=document.createElement("h3")
    climate.innerHTML=`climate:${data.weather[0].main}`
    let windspeed=document.createElement("h3")
    windspeed.innerHTML=`windspeed :${data.wind.speed}km/hr`
    outputDiv.append(cityName,temperature,climate,windspeed)
  }
  else if(res.status==404){
    let notfound=document.createElement("h3")
    notfound.innerHTML="city not found,please eneter proper city name"
    outputDiv.append(notfound)
  }
  

 },)