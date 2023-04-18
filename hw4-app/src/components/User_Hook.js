import './Users.css';
import { useToggle } from '../hooks/useToggler';



const User_Hook = ({ username, email, city, street, suite, phone }) => {  
    const [isLiked, setLiked] = useToggle(true)
    return (
        <div>
            <h4>{username} {email} </h4>
            {isLiked && 
            <h5> 
               <span> city:</span>{city} <br/>
               <span> street:</span>{street} <br/>
               <span> suite:</span>{suite} <br/>
               <span> phone:</span>{phone} 
            </h5> 
            }
            <button onClick={setLiked}>See details</button>
            
        </div>
    )
      
}

export default User_Hook;
