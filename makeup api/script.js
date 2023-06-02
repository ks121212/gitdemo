async function getdata(){
 let brand=document.getElementById("brand").value;
  let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
 let data=await res.json();
  console.log(data);
  getAllData(data);
  }
  function getAllData(datas){
    document.body.style.background="none";
    document.getElementById("datas").style.display="none";
    let results=document.getElementById("showResult");
    results.innerHTML="";
    datas.forEach(dat => {
      let{brand,name,price ,website_link,description,image_link}=dat;
      let element1=document.createElement("div");
      element1.classList.add("dataAll");
      element1.innerHTML=`<div class="container">
          <div class="all">
        <center><div class="image">
          <img src="${image_link}"></img>
        </div>
      <h1>${brand}</h1>
    <h2>${name}</h2>
    <h3>${price}</h3>
    <p>${description}</p>
    <p><a href="${website_link}">${website_link}></a></p></center>
           </div>
         </div>`
      results.appendChild(element1);
    });
  }

  getdata();