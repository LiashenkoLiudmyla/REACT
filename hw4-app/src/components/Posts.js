import Post from "./Post"
import { DataMaker } from "./DataMaker"

export const Posts = ({ data }) => {

    console.log('data',data)

    return (        
        <div>
            <Post data={data}/>
        </div>
    )    
}







// import React from "react";

// import Card from 'react-bootstrap/Card'

// // import Card from "react-bootstrap"

// export const Posts = ({ posts }) => {
//     console.log('posts', posts)
//     return (
//         <div className="post__container" key={posts.id}>
//             <Card>
//                 <Card.Body>
//                     <Card.Title>{posts.title}</Card.Title>
//                     <Card.Text>{posts.body}</Card.Text>
//                 </Card.Body>
//             </Card>

//         </div>
//     )
// }