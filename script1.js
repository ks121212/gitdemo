var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

 //2.q
    for(var i=0;i<result.length;i++){
       console.log(result[i].flags.png);
    }
  
//     //3.q
    for(var i=0;i<result.length;i++){
        console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);

    }
}