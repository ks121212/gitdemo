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
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>`
    }
    document.body.append(container);
}