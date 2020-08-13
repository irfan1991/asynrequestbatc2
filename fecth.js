//promise 

fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    headers : {
        "Content-Type" :"application/json",
        "Accept" :"application/json"
    },
    body : JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1

    })
})
.then(response => {
    return response.json();
})
.then(responseJson => {
    console.log(responseJson);
})
.catch(error => {
    console.log(error);
})


//async /await

// async function getPost() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const responseJson = await response.json();
//         console.log(responseJson);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getPost();