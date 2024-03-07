
let contenuto = {
    userId: 8,
    id: 2,
    title: "titolo nuovo",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}



fetch(`https://jsonplaceholder.typicode.com/posts/${contenuto.id}`,{
    method:'PUT',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(contenuto)
})
.then(res => res.json())
.then(res => {

    //operazioni di conferma
    //eventuale apparizione O MODIFICA del nuovo dato
})