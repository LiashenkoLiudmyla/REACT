import UserCard from "./UserCard";
import { useToggle } from "../hooks/useToggler";

import { useFetchingData } from "../hooks/useFetchingData";

const USER_BASE_URL = "https://my.api.mockaroo.com/cards/123.json?key=778301b0";

const UserCardList = () => {
  const { data, error, isLoading } = useFetchingData(USER_BASE_URL);

 console.log('useFetchingData', useFetchingData)

 console.log('error', error)

 console.log('isLoading', isLoading)

  return (
    <div>
      <h3>USERS</h3>
      {isLoading && <div>Loading...</div>}
      {error && !isLoading && <div>Error: {error}</div>}
      {!error &&
        !isLoading &&
        data?.map((user) => (
          <UserCard
            key={user.id}
            data={user.data}
            numbers={user.numbers}
            
            // phone={user.phone}
            // address={user.address}
            // city={user.address.city}
            // street={user.address.street}
            // suite={user.address.suite}
            // company={user.company.name}
          />
        ))}
    </div>
  );
};

export default UserCardList;
