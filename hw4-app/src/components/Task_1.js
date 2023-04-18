import User from "./Users";
import { userData } from "../data/userData";
import Album from "./Album";
import { albumData } from "../data/albomsData";

// const ALBUM_BASE_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10"

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
                thumbnailUrl={albumData.thumbnailUrl}
            />
        </div>
    )
}

export default Task_1