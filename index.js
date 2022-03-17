let key ="58e250d6b9b5f582349f1084a66fd8fb"
let con = document.getElementById('con')
let iframe =document.getElementById('gmap_canvas')
async function getweatherdata(){
    try{
        let city = document.getElementById("city").value;
        let res = await fetch(`https:\\api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        let data = await res.json();
        console.log('data:',data)
        showweather(data)
    }
    catch(err){
        console.log("error",err)
    }
  
}

 function showweather(d){
     con.innerHTML=''
     let name = document.createElement('p')
     name.innerText=`city-${d.name}`;

     let temp = document.createElement('p')
     temp.innerText=`temp-${d.main.temp}`;

     let humidity= document.createElement('p')
     humidity.innerText=`humidity-${d.main.humidity}`;

     let pressure = document.createElement('p')
     pressure.innerText =`pressure-${d.main.pressure}`;

     iframe.src=`https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
     
     con.append(name,temp,humidity,pressure)
 }