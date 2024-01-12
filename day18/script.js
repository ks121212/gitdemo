// function sub(a){
//     if(a<18){
//         throw new Error("Your are age is not 18");
//     }
//     return `Your age is eligible for vote `;
// }

// try {
//     const result=sub(23);
//     console.log(result)
// } catch (error) {
//     console.error("Your are not eligible for vote",error.message);
// }

async function fetchData(){
    const url="https://restcontries.com/v3.1/all";
    try {
       const response=await fetch(url);
       const data=await response.json();
       console.log("Data fetched successfully",data) 
    } catch (error) {
       console.error('Not fetching data',error) 
    }
}
fetchData()
