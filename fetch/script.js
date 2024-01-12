const url="https://restcontries.com/v3.1/all";

fetch(url)
.then((response)=>{
    if(response.status===200){
        response.json();
    }else{
        console.log(error);
    }
})
.then((response)=>response.data)