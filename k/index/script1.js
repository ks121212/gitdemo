// 1.
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var res=result.filter((ele)=>ele.region==="Asia");
   console.log(res);

}

// 2.
 var request=new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
     var result=JSON.parse(request.response);
     console.log(result);
     var res=result.filter((ele)=>ele.population<200000);
    console.log(res);
 }

//3.
var request=new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
     var result=JSON.parse(request.response);
     console.log(result);
     var res=result.forEach(ele =>console.log(ele.name.common,ele.capital,ele.flags.png) );
     console.log(res);
 }

// 4.q
var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all");
  request.send();
  request.onload=function(){
      var result=JSON.parse(request.response);
      console.log(result);
     var res=result.filter((ele)=>{ele.currencies.USD
           console.log(ele.name.common)
    });
      console.log(res);
  }