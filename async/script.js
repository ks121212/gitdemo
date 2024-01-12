// let promiseObj= new Promise(function(resolve,reject){
//     console.log(
//         "Procecing code is called automatically, as soon as the promise object is created!!!"
//     );
// });

// let promiseObj=new Promise((resolve,reject)=>{
//    console.log("What is your name??");
//    setTimeout(()=>{
//     resolve("My name is Kuppusamy");
//    },3000);
// });

// console.log(promiseObj);

function asyncTask1(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve("Task 1 is completed!!!");
      },2000)
   })
}

function asyncTask2(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve("Task 2 is completed!!!");
      },3000)
   })
}

function asyncTask3(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve("Task 3 is completed!!!");
         // reject('Task 3 is Error through!!!')
      },4000)
   })
}


// asyncTask1().then((value)=>{
//    console.log(value);
//    return asyncTask2();
// })
// .then((value)=>{
//    console.log(value);
//    return asyncTask3();
// })
// .then((value)=>{
//    console.log(value);
//    console.log('All the tasks are completed!!!')
// })
// .catch((error)=>{
//    console.log('Error:',error);
// })

Promise.all([asyncTask1(),asyncTask2(),asyncTask3()])
.then((results)=>{
   console.log(results);
console.log('All the tasks are completed!!!');
})
.catch((err)=>{
   console.error('Error:',err);
})