
const Post = ({title, completed, id }) => {  

    return (
       <li>
        <div>{`Id: ${id} - Title: ${title} - completed: ${completed}`}</div>
       </li>
    )
      
}

export default Post;

