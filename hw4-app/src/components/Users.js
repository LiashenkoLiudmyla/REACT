// import { Form } from "react-bootstrap";
// import React, { Component } from "react";
import './Users.css';
// import { useState } from "react";
import { withToggler } from "../HOCs/withToggler"


const User = ({username, email, city, street, suite, phone, toggled, changeToggle}) => {  
    // const [toggled, setToggled] = useState (false)  

    // const changeToggle = () => {
    //     setToggled(prev => !prev)
    // }
    
    return (
        <div>
            <h4>{username} {email} </h4>
            {toggled && 
            <h5> 
               <span> city:</span>{city} <br/>
               <span> street:</span>{street} <br/>
               <span> suite:</span>{suite} <br/>
               <span> phone:</span>{phone} 
            </h5> 
            }
            <button onClick={changeToggle}>See details</button>
            
        </div>
    )
      
}

export default withToggler(User);


// class User extends Component {
//     state = { users: [] };
    

//     componentDidMount() {
        
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((json) => this.setState({ users: json }));        
//     }

//     render() {
//         const { users } = this.state;
       
//         return <div>
//             {users.map(users => (
//                 <div key={users.id}>
//                     {users.id} / / {users.username} / / {users.email} / / 
//                     See details address: 
//                     {users.address.city} / / {users.address.street} / /{users.address.suite} / / {users.address.phone} / / 
//                     {users.company.name}
//                     <button onClick={"hide details"}>See details</button>
//                 </div>
                    
//             ))}
//             </div>;
//     }    
// }

// export default User;