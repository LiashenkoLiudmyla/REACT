import User from "./Users";
import Album from "../Album";
import { userData } from "../../data/userData";
import { albumData } from "../../data/albomsData";

const Task_1 = () => {
    return (
        <div>
            <h2>Task 1</h2>
            <User
                username={userData.username}
                email={userData.email}
                phone={userData.phone}
                address={userData.address} 
                city={userData.address.city} 
                street={userData.address.street} 
                suite={userData.address.suite}
                company={userData.company.name}
            />
            <Album
                title={albumData.title}
                url={albumData.url}
            />
        </div>
    )
}

export default Task_1


// аddress={userData.address}
// company={userData.company}