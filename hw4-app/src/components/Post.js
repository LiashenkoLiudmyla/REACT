
const Post = ({title, completed, id }) => {  

    return (
       <li>
        <div>{`Id: ${id} - Title: ${title} - completed: ${completed}`}</div>
       </li>
    )
      
}

export default Post;

// import Post from "./Post"

// export const Posts = ({ data }) => {

//     console.log('data')

//     return (        
//         <div >
//             <Post data={data}/>
//         </div>
//     )    
// }