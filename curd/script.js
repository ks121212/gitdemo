 function getPost(){
     fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(Response => Response.json())
    .then(posts =>{
        let tableBody= document.querySelector('#posts')
        tableBody.innerHTML='';
        posts.forEach(posts => {
            let row= document.createElement('tr');
            row.innerHTML=`
            <td>${posts.id}</td>
            <td> ${posts.title}</td>
            <td> ${posts.body}</td>
            <td> 
            <button onlclick="editPost(${posts.id})">Edit</button>
            <button onlclick="editPost(${posts.title})">Delete</button>
            </td>`;
            tableBody.appendChild(row)
            
        });
    })         
}
async function createPost(event) {
    event.preventDefault();

    // get the form elements
    let titleInput = document.querySelector('#title');
    let bodyInput = document.querySelector('#body');

    // create the new Post
    let newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    }

    // make the api request to post the data to the server to get it created
    try{
        let postedJson= await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newPost),
    })
   let postObject= await postedJson.json();
    
       console.log(postObject);
       getPost();
      }catch(error){
        console.error(error)
      }


}

// create a reference to the dom element form with id create-post-form
let createPostForm = document.querySelector('#create-post-form');

// attach an event listener
createPostForm.addEventListener('submit', createPost);
getPost();