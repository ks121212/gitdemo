URL="https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";

var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-5");
container.append(row);

async function fetchingData(){
    const cat= await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME");
    const response= await cat.json();
    foo(response);
}

function foo(response){
    console.log(response) 
 for(let i=0;i<response.length;i++){
         row.innerHTML+=`
    <div class="card m-3 body" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
    <img src="${response[i].url}"  class="img-fluid rounded-start image" alt="..." sizes="100px">
     
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <div class="text">
      <center>
           <h5>    ID: ${response[i].id}</h5>
           <h5> WIDTH: ${response[i].width}</h5>
           <h5>HEIGHT: ${response[i].height}</h5>  
           </center> 
           </div>
      </div>
    </div>
  </div>
</div>
      
       `
}
document.body.append(container);
}
fetchingData()

