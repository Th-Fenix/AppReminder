// Este es un react server component
// 
import {ListOfPosts} from './ListOfPosts'


export default async function PostPage({params}){
    return (
       <section>
        <ListOfPosts />
       </section> 
    )
}