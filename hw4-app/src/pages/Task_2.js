import UserList from "../components/UserList"
import AlbumList from "../components/AlbumList"

const USER_BASE_URL = "https://jsonplaceholder.typicode.com/users?_limit=10"
 const ALBUM_BASE_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10"

const Task_2 = () => { 

    return (
        <div>
            <h2>Task 2</h2>
            <UserList url={USER_BASE_URL}/>
            <AlbumList url={ALBUM_BASE_URL}/>
        </div>
    )
}

export default Task_2