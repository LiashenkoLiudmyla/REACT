import User_Hook from "./User_Hook";
import Album_Hook from "./Album_Hook"
import { userData } from "../data/userData";
import { albumData } from "../data/albomsData"

function Task_5() {
  return (
    <div>
            <h2>Task 5</h2>
            <User_Hook
                username={userData.username}
                email={userData.email}
                phone={userData.phone}
                address={userData.address} 
                city={userData.address.city} 
                street={userData.address.street} 
                suite={userData.address.suite}
                company={userData.company.name}
            />
            <Album_Hook
                title={albumData.title}
                thumbnailUrl={albumData.thumbnailUrl}
            />
        </div>
    
  )
}

export default Task_5;
