// async function getdata(){
//     var res=await fetch('https://restcountries.com/v3.1/all');
//     var res1=await res.json();
    
//     // for(var i=0;i<res1.length;i++){
//     //   try{
//     //     weatherdata(res1[i].latlng[0],res1[i].latlng[1])
//     //   }
    
//     // catch(error){
//     //   console.log(error);
//     // }
//     // }
  
//     }
 function weatherdata(lat,lon){
      try{
        if(lon==undefined) throw new Error("Invaid coordinates");
        let res= fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=600c14de378d9b41408f938bb1643873`);
        res.then((urlData)=>urlData.json())
        .catch((error)=>console.log(error));
        for(var i=0;i<urlData.length;i++){
          console.log(`${urlData[i].main.temp}`);
        }
        
      }catch(error){
        console.log(error);
      }
    }   

var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));


function foo(data1,lat,lon){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
      try{
        weatherdata(data1[i].latlng[0],data1[i].latlng[1])
      }
    
    catch(error){
      console.log(error);
    }
    }
   
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card">
        <h4 class="card-title">${data1[i].name.common}</h4>
        <hr/>
  <img src="${data1[i].flags.png}" class="card-img-top image" alt="Country Flags">
  <div class="card-body">
    <p class="card-text">Capital:${data1[i].capital}<br>
    Latlng:${data1[i].latlng}<br>
    Region:${data1[i].region}<br>
    Country Code:${data1[i].numericCode}</p>
    <button onClick='weatherdata(data1[i].latlng[0],data1[i].latlng[1])' class='btn btn-primary' >Click</button>
    <a href="#"></a>
  </div>
  </div>
</div>`
    }
    document.body.append(container);
}
