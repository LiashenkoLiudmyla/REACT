import User from "./Users"
import { withFetchingData } from "../HOCs/withFetchingData"

const UserList = ({data: users, isLoading, error}) => {
    //щоб тут нам не прописуватизапрос з фетчем ерором тому що
    // логіка буде у нас використовуватися і в АльбомЛіст
    // створимо відразу НОС в якому опишемо функціональність
    return(
        <div>
            <h3>USERS</h3>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {users && users.map(user => (
                <User
                key={user.id}
                username={user.username}
                email={user.email}
                phone={user.phone}
                address={user.address} 
                city={user.address.city} 
                street={user.address.street} 
                suite={user.address.suite}
                company={user.company.name}
            />
            ))}

        </div>
    )
}

export default withFetchingData(UserList)