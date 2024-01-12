var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card" style="width: 18rem;">
        <h5 class="card-title">${data1[i].name}</h5>
  <img src="${data1[i].flag}" class="card-img-top" alt="Country Flags">
  <div class="card-body">
    <p class="card-text">Capital:${data1[i].capital}<br>
    Latlng:${data1[i].latlng}<br>
    Region:${data1[i].region}<br>
    Country Code:${data1[i].numericCode}</p>
    <a href="#" class="btn btn-primary" onclick="getdata()">Weatherdata</a>
  </div>
  </div>
</div>`
    }
    document.body.append(container);
}


async function getdata(){
  var res=await fetch("https://restcountries.com/v2/all");
  var res1=await res.json();
  
  for(var i=0;i<res1.length;i++){
    try{
      weatherdata(res1[i].latlng[0],res1[i].latlng[1])
    }
  
  catch(error){
    console.log(error);
  }
  }
  }
  async function weatherdata(lat,lon){
    try{
      if(lon==undefined) throw new Error("Invaid coordinates");
      console.log(lat,lon);
      let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=62901df84eeb8de26224cd4773c1c35a`);
      let res3=await res2.json();
      console.log(`${res3.main.temp}`);
    }catch(error){
      console.log(error);
    }
    
  }
  
  getdata();

