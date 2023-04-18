
const Post = ({title, completed }) => {  
    
    console.log('title', title)
   
    return (
       <li>
        <div>{`Title: ${title} - completed: ${completed}`}</div>
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