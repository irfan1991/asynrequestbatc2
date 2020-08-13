const xhr = new XMLHttpRequest();

xhr.onload = function () {
    console.log(JSON.parse(this.responseText))
}

xhr.onerror = function () {
    console.log("Something wrongs !!");
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

//menambahkakn  properti header 
xhr.setRequestHeader("Content-Type","application/json");
xhr.setRequestHeader("Accept","application/json");

const test = {
    title: 'foo',
    body: 'bar',
    userId: 1
}
xhr.send(JSON.stringify(test));