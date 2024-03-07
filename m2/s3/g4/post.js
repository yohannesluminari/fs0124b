
let contenuto = {
    userId: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}



fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(contenuto)
})
.then(res => res.json())
.then(res => {

    //operazioni di conferma
    //eventuale apparizione del nuovo dato

})