import UserHook from "./User_Hook";

import { useFetchingData } from "../hooks/useFetchingData";

const USER_BASE_URL = "https://jsonplaceholder.typicode.com/users/1";

const UserListHook = () => {
  const { data: users, error, isLoading } = useFetchingData(USER_BASE_URL);

  return (
    <div>
      <h3>USERS</h3>
      {isLoading && <div>Loading...</div>}
      {error && !isLoading && <div>Error: {error}</div>}
      {!error &&
        !isLoading &&
        users?.map((user) => (
          <UserHook
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
  );
};

export default UserListHook;
