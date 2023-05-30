let userId=1;

// function fetchData(){
//     getUserDetails(userId)
//        .then(user => getUserDetails(user.id))
//        .then(posts => getUserPosts(posts[0].id))
//        .then(comments => console.log(comments))
// }

// function getUserDetails(userId){
// return fetch(`https://jsonlaceholder.typicode.com/users/${userId}`)
// .then(response => response.json())
// .catch(error => console.log(error))

// }

// function getUserPosts(userId){
//     return fetch(`https://jsonlaceholder.typicode.com/posts?userId=${userId}`)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }

// function getUserComments(postId){
//     return fetch(`https://jsonlaceholder.typicode.com/comments?posts=${postId}`)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }

async function fetchData(){
try{
   let userid=1;
   let res=await fetch(`https://jsonlaceholder.typicode.com/users/${userId}`)
   let response=await res.json()
   
   



}catch(error){
console.error(`error fetching the data`);
}
}