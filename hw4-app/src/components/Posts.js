import Post from "./Post"


export const Posts = ({ data: posts, title, completed }) => {

    return (        
        <div>
             {posts.map(post => (
                 <Post
                 title={post.title}
                 completed={post.completed}
                 id={post.id}
             />
            ))}
           
        </div>
    )    
}




