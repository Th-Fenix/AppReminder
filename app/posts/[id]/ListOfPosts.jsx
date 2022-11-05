
const fetchPost = () => {
    return (fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json()))
}


export default async function ListOfPosts (){
   
   const post = await fetchPost()
   
   return post.slice(0, 5).map(post =>(
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    ))  
}